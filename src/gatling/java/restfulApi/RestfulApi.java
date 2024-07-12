package restfulApi;

import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class RestfulApi extends Simulation {

    // Case 1 - Como puedo testearlo en diferentes ambientes
    String baseUrl = System.getProperty("baseUrl", "https://api.restful-api.dev");
    String concurrentUsers = System.getProperty("concurrentUsers", "10");

    FeederBuilder.FileBased<Object> feeder = jsonFile("data/restfulapi/createObject.json").circular();

    private HttpProtocolBuilder httpProtocol = http
            .baseUrl(baseUrl);


    ScenarioBuilder scn = scenario("restFullAPi")
            .feed(feeder)
            .exec(http("Create Object restfulApi")
                    .post("/objects")
                    .body(StringBody(
                            """
                                      {
                                      "name": "#{name}",
                                      "data": {
                                        "year": #{year},
                                        "price": #{price},
                                        "CPU model": "#{cpuModel}",
                                        "Hard disk size": "#{hardDiskSize}"
                                      }
                                    }
                               """
                    )).asJson()
                    .check(status().is(200))
                    .check(jmesPath("id").find().saveAs("id"))
            )
            .exec(
                    session -> {
                        System.out.println("Created #{name} id: " + session.getString("id"));
                        return session;
                    }
            )
            .exec(http("Update Object restfulApi")
                    .put("/objects/#{id}")
                    .body(StringBody(
                            """
                                      {
                                      "name": "#{name}edit",
                                      "data": {
                                        "year": #{year},
                                        "price": #{price}1,
                                        "CPU model": "#{cpuModel}edit",
                                        "Hard disk size": "#{hardDiskSize}edit",
                                        "color": "blue"
                                      }
                                    }
                               """
                    )).asJson()
                    .check(status().is(200))
                    .check(bodyString().saveAs("BODY"))
            )
            .exec(
                    session -> {
                        System.out.println("Updated body #{name} id: " + session.getString("BODY"));
                        return session;
                    }
            )
            .exec(http("Update Object restfulApi")
                    .get("/objects/#{id}")
                    .check(status().is(200))
                    .check(bodyString().saveAs("BODYGET"))
                    .check(jmesPath("name").isEL("#{name}edit"))
            )
            .exec(
                    session -> {
                        System.out.println("get body #{name} id: " + session.getString("BODYGET"));
                        return session;
                    }
            );


    {
        setUp(
                scn.injectClosed(
                        constantConcurrentUsers(Integer.parseInt(concurrentUsers)).during(Duration.ofSeconds(10)
                        )
                )
        ).protocols(httpProtocol);
    }

}
