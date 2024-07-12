var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "24",
        "ok": "24",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "945",
        "ok": "945",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    },
    "percentiles1": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "percentiles2": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "percentiles3": {
        "total": "825",
        "ok": "825",
        "ko": "-"
    },
    "percentiles4": {
        "total": "918",
        "ok": "918",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 21,
    "percentage": 87.5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 12.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.18",
        "ok": "2.18",
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
        "total": "8",
        "ok": "8",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "percentiles1": {
        "total": "262",
        "ok": "262",
        "ko": "-"
    },
    "percentiles2": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "percentiles3": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "percentiles4": {
        "total": "733",
        "ok": "733",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.73",
        "ok": "0.73",
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
        "total": "16",
        "ok": "16",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "945",
        "ok": "945",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "274",
        "ok": "274",
        "ko": "-"
    },
    "percentiles1": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles2": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "percentiles3": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "percentiles4": {
        "total": "927",
        "ok": "927",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13,
    "percentage": 81.25
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 18.75
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.45",
        "ok": "1.45",
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
