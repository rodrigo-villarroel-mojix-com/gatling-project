var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "27",
        "ok": "27",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1195",
        "ok": "1195",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "percentiles1": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "percentiles2": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1128",
        "ok": "1128",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1179",
        "ok": "1179",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 24,
    "percentage": 88.88888888888889
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 11.11111111111111
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
        "total": "2.25",
        "ok": "2.25",
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
        "total": "9",
        "ok": "9",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1195",
        "ok": "1195",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "548",
        "ok": "548",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles1": {
        "total": "382",
        "ok": "382",
        "ko": "-"
    },
    "percentiles2": {
        "total": "457",
        "ok": "457",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1165",
        "ok": "1165",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1189",
        "ok": "1189",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 77.77777777777779
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 22.22222222222222
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
        "total": "0.75",
        "ok": "0.75",
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
        "total": "18",
        "ok": "18",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1132",
        "ok": "1132",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "percentiles1": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles2": {
        "total": "358",
        "ok": "358",
        "ko": "-"
    },
    "percentiles3": {
        "total": "489",
        "ok": "489",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1003",
        "ok": "1003",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 17,
    "percentage": 94.44444444444444
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 5.555555555555555
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
        "total": "1.5",
        "ok": "1.5",
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
