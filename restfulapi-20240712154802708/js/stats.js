var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2026",
        "ok": "2026",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "580",
        "ok": "580",
        "ko": "-"
    },
    "percentiles1": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "percentiles2": {
        "total": "821",
        "ok": "821",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2011",
        "ok": "2011",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2023",
        "ok": "2023",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 66.66666666666666
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 20.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 13.333333333333334
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.36",
        "ok": "1.36",
        "ko": "-"
    }
},
contents: {
"req_create-object-r-121462158": {
        type: "REQUEST",
        name: "Create Object restfulApi",
path: "Create Object restfulApi",
pathFormatted: "req_create-object-r-121462158",
stats: {
    "name": "Create Object restfulApi",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2026",
        "ok": "2026",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "830",
        "ok": "830",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "percentiles1": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1014",
        "ok": "1014",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1824",
        "ok": "1824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1986",
        "ok": "1986",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 60.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 20.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 20.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.45",
        "ok": "0.45",
        "ko": "-"
    }
}
    },"req_update-object-r--1536132069": {
        type: "REQUEST",
        name: "Update Object restfulApi",
path: "Update Object restfulApi",
pathFormatted: "req_update-object-r--1536132069",
stats: {
    "name": "Update Object restfulApi",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2004",
        "ok": "2004",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "608",
        "ok": "608",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "525",
        "ok": "525",
        "ko": "-"
    },
    "percentiles1": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "percentiles2": {
        "total": "807",
        "ok": "807",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1477",
        "ok": "1477",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1899",
        "ok": "1899",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 70.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 20.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 10.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.91",
        "ok": "0.91",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
