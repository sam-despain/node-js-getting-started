function loadTotal() {
    var total = parseFloat($("#cases").val()) + parseFloat($("#coolers").val()) + parseFloat($("#cpus").val()) + parseFloat($("#gpus").val()) + parseFloat($("#monitors").val()) + parseFloat($("#motherboards").val()) + parseFloat($("#os").val()) + parseFloat($("#psus").val()) + parseFloat($("#ram").val()) + parseFloat($("#storage").val());
    $("#total").empty();
    $("#total").append('<b>Total</b><br>$<input id="total" value="' + total.toFixed(2) + '" readonly>');
}
function loadData() {
    $.get("/getCase", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cases").append("<option value=" + data[i].price + ">" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCooler", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#coolers").append("<option value=" + data[i].price + ">" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCpu", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cpus").append("<option value=" + data[i].price + ">" + data[i].cores + "-core @ " + data[i].clock + " GHz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getGpu", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#gpus").append("<option value=" + data[i].price + ">" + data[i].ram + " GB, " + data[i].cores + "-core @ " + data[i].clock + " GHz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMonitor", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#monitors").append("<option value=" + data[i].price + ">" + data[i].resolution + " - " + data[i].refresh + " Hz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMotherboard", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#motherboards").append("<option value=" + data[i].price + ">" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getOs", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#os").append("<option value=" + data[i].price + ">" + data[i].name + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getPsu", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#psus").append("<option value=" + data[i].price + ">" + data[i].wattage + "W - $" + data[i].price + "</option>");
        }
    });
    $.get("/getRam", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#ram").append("<option value=" + data[i].price + ">" + data[i].size + " GB - $" + data[i].price + "</option>");
        }
    });
    $.get("/getStorage", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#storage").append("<option value=" + data[i].price + ">" + data[i].type + " " + data[i].size + " GB - $" + data[i].price + "</option>");
        }
    });

}
