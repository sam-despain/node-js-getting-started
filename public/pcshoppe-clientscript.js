function loadData() {
    $.get("/getCaseList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cases").append("<option value='" + data[i].price + "'>" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCoolerList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#coolers").append("<option value='" + data[i].price + "'>" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCpuList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cpus").append("<option value='" + data[i].price + "'>" + data[i].cores + "-core @ " + data[i].clock + " GHz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getGpuList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#gpus").append("<option value='" + data[i].price + "'>" + data[i].ram + " GB, " + data[i].cores + "-core @ " + data[i].clock + " GHz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMonitorList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#monitors").append("<option value='" + data[i].price + "'>" + data[i].resolution + " - " + data[i].refresh + " Hz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMotherboardList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#motherboards").append("<option value='" + data[i].price + "'>" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getOsList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#os").append("<option value='" + data[i].price + "'>" + data[i].name + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getPsuList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#psus").append("<option value='" + data[i].price + "'>" + data[i].wattage + "W - $" + data[i].price + "</option>");
        }
    });
    $.get("/getRamList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#ram").append("<option value='" + data[i].price + "'>" + data[i].size + " GB - $" + data[i].price + "</option>");
        }
    });
    $.get("/getStorageList", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#storage").append("<option value='" + data[i].price + "'>" + data[i].type + " " + data[i].size + " GB - $" + data[i].price + "</option>");
        }
    });

}
