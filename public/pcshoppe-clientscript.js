function loadData() {
    $.get("/getCaseList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cases").append("<option>" + data[i].type + "</option>");
        }
    });
    $.get("/getCoolerList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#coolers").append("<option>" + data[i].type + "</option>");
        }
    });
    $.get("/getCpuList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cpus").append("<option>" + data[i].cores + "-core @ " + data[i].clock + " GHz</option>");
        }
    });
    $.get("/getGpuList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#gpus").append("<option>" + data[i].ram + " GB, " + data[i].cores + "-core @ " + data[i].clock + " GHz</option>");
        }
    });
    $.get("/getMonitorList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#monitors").append("<option>" + data[i].resolution + " - " + data[i].refresh + " Hz</option>");
        }
    });
    $.get("/getMotherboardList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#motherboards").append("<option>" + data[i].type + "</option>");
        }
    });
    $.get("/getOsList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#os").append("<option>" + data[i].name + "</option>");
        }
    });
    $.get("/getPsuList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#psus").append("<option>" + data[i].wattage + "W</option>");
        }
    });
    $.get("/getRamList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#ram").append("<option>" + data[i].size + " GB</option>");
        }
    });
    $.get("/getStorageList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#storage").append("<option>" + data[i].type + " " + data[i].size + " GB</option>");
        }
    });

}
