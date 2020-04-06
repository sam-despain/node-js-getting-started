function loadTotal() {
    var caseId = parseInt($("#casing").val())-1;
    var casePrice;
    var coolerId = parseInt($("#cooler").val())-1;
    var coolerPrice;
    var cpuId = parseInt($("#cpu").val())-1;
    var cpuPrice;
    var gpuId = parseInt($("#gpu").val())-1;
    var gpuPrice;
    var monitorId = parseInt($("#monitor").val())-1;
    var monitorPrice;
    var motherboardId = parseInt($("#motherboard").val())-1;
    var motherboardPrice;
    var osId = parseInt($("#os").val())-1;
    var osPrice;
    var psuId = parseInt($("#psu").val())-1;
    var psuPrice;
    var ramId = parseInt($("#ram").val())-1;
    var ramPrice;
    var storageId = parseInt($("#storage").val())-1;
    var storagePrice;
    var total = 0.0;
    $.get("/getCase", function(data) {
        if (caseId >= 0) {
            casePrice = data[caseId].price;
        } else {
            casePrice = 0;
        }
        parseFloat(casePrice);
        total += casePrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getCooler", function(data) {
        if (coolerId >= 0) {
            coolerPrice = data[coolerId].price;
        } else {
            coolerPrice = 0;
        }
        parseFloat(coolerPrice);
        total += coolerPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getCpu", function(data) {
        if (cpuId >= 0) {
            cpuPrice = data[cpuId].price;
        } else {
            cpuPrice = 0;
        }
        parseFloat(cpuPrice);
        total += cpuPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getGpu", function(data) {
        if (gpuId >= 0) {
            gpuPrice = data[gpuId].price;
        } else {
            gpuPrice = 0;
        }
        parseFloat(gpuPrice);
        total += gpuPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getMonitor", function(data) {
        if (monitorId >= 0) {
            monitorPrice = data[monitorId].price;
        } else {
            monitorPrice = 0;
        }
        parseFloat(monitorPrice);
        total += monitorPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getMotherboard", function(data) {
        if (motherboardId >= 0) {
            motherboardPrice = data[motherboardId].price;
        } else {
            motherboardPrice = 0;
        }
        parseFloat(motherboardPrice);
        total += motherboardPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getOs", function(data) {
        if (osId >= 0) {
            osPrice = data[osId].price;
        } else {
            osPrice = 0;
        }
        parseFloat(osPrice);
        total += osPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getPsu", function(data) {
        if (psuId >= 0) {
            psuPrice = data[psuId].price;
        } else {
            psuPrice = 0;
        }
        parseFloat(psuPrice);
        total += psuPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getRam", function(data) {
        if (ramId >= 0) {
            ramPrice = data[ramId].price;
        } else {
            ramPrice = 0;
        }
        parseFloat(ramPrice);
        total += ramPrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
    $.get("/getStorage", function(data) {
        if (storageId >= 0) {
            storagePrice = data[storageId].price;
        } else {
            storagePrice = 0;
        }
        parseFloat(storagePrice);
        total += storagePrice;
        $("#total").empty();
        $("#total").append('<b>Total</b><br>$<input name="total" value="' + total.toFixed(2) + '" readonly>');
    });
}
function loadData() {
    $.get("/getCase", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#casing").append("<option value=" + data[i].id + ">" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCooler", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cooler").append("<option value=" + data[i].id + ">" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCpu", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#cpu").append("<option value=" + data[i].id + ">" + data[i].cores + "-core @ " + data[i].clock + " GHz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getGpu", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#gpu").append("<option value=" + data[i].id + ">" + data[i].ram + " GB, " + data[i].cores + "-core @ " + data[i].clock + " GHz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMonitor", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#monitor").append("<option value=" + data[i].id + ">" + data[i].resolution + " - " + data[i].refresh + " Hz - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMotherboard", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#motherboard").append("<option value=" + data[i].id + ">" + data[i].type + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getOs", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#os").append("<option value=" + data[i].id + ">" + data[i].name + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getPsu", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#psu").append("<option value=" + data[i].id + ">" + data[i].wattage + "W - $" + data[i].price + "</option>");
        }
    });
    $.get("/getRam", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#ram").append("<option value=" + data[i].id + ">" + data[i].size + " GB - $" + data[i].price + "</option>");
        }
    });
    $.get("/getStorage", function(data) {
        //console.log("Back from server with: " + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            $("#storage").append("<option value=" + data[i].id + ">" + data[i].type + " " + data[i].size + " GB - $" + data[i].price + "</option>");
        }
    });
}
