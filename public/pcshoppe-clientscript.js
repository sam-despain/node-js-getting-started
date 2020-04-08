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
        casePrice = (caseId >= 0) ? data[caseId].price : 0;
        parseFloat(casePrice);
        total += casePrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getCooler", function(data) {
        coolerPrice = (coolerId >= 0) ? data[coolerId].price : 0;
        parseFloat(coolerPrice);
        total += coolerPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getCpu", function(data) {
        cpuPrice = (cpuId >= 0) ? data[cpuId].price : 0;
        parseFloat(cpuPrice);
        total += cpuPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getGpu", function(data) {
        gpuPrice = (gpuId >= 0) ? data[gpuId].price : 0;
        parseFloat(gpuPrice);
        total += gpuPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getMonitor", function(data) {
        monitorPrice = (monitorId >= 0) ? data[monitorId].price : 0;
        parseFloat(monitorPrice);
        total += monitorPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getMotherboard", function(data) {
        motherboardPrice = (motherboardId >= 0) ? data[motherboardId].price : 0;
        parseFloat(motherboardPrice);
        total += motherboardPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getOs", function(data) {
        osPrice = (osId >= 0) ? data[osId].price : 0;
        parseFloat(osPrice);
        total += osPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getPsu", function(data) {
        psuPrice = (psuId >= 0) ? data[psuId].price : 0;
        parseFloat(psuPrice);
        total += psuPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getRam", function(data) {
        ramPrice = (ramId >= 0) ? data[ramId].price : 0;
        parseFloat(ramPrice);
        total += ramPrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
    $.get("/getStorage", function(data) {
        storagePrice = (storageId >= 0) ? data[storageId].price : 0;
        parseFloat(storagePrice);
        total += storagePrice;
        $("#total").empty();
        $("#total").append('<td id="tRight"><b>Total</b></td><td>$<input type="text" name="total" value="' + total.toFixed(2) + '" readonly></td>');
    });
}

function loadData() {
    var caseList = [];
    var coolerList = [];
    var cpuList = [];
    var gpuList = [];
    var monitorList = [];
    var motherboardList = [];
    var osList = [];
    var psuList = [];
    var ramList = [];
    var storageList = [];
    $.get("/getCase", function(data) {
        for (var i = 0; i < data.length; i++) {
            caseList[i] = data[i].type;
            $("#casing").append("<option value=" + data[i].id + ">" + caseList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCooler", function(data) {
        for (var i = 0; i < data.length; i++) {
            coolerList[i] = data[i].type;
            $("#cooler").append("<option value=" + data[i].id + ">" + coolerList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getCpu", function(data) {
        for (var i = 0; i < data.length; i++) {
            cpuList[i] = data[i].cores + "-core, " + data[i].clock + " GHz";
            $("#cpu").append("<option value=" + data[i].id + ">" + cpuList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getGpu", function(data) {
        for (var i = 0; i < data.length; i++) {
            gpuList[i] = data[i].ram + " GB, " + data[i].cores + "-core, " + data[i].clock + " GHz";
            $("#gpu").append("<option value=" + data[i].id + ">" + gpuList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMonitor", function(data) {
        for (var i = 0; i < data.length; i++) {
            monitorList[i] = data[i].resolution + " - " + data[i].refresh + " Hz";
            $("#monitor").append("<option value=" + data[i].id + ">" + monitorList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getMotherboard", function(data) {
        for (var i = 0; i < data.length; i++) {
            motherboardList[i] = data[i].type;
            $("#motherboard").append("<option value=" + data[i].id + ">" + motherboardList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getOs", function(data) {
        for (var i = 0; i < data.length; i++) {
            osList[i] = data[i].name;
            $("#os").append("<option value=" + data[i].id + ">" + osList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getPsu", function(data) {
        for (var i = 0; i < data.length; i++) {
            psuList[i] = data[i].wattage + "W";
            $("#psu").append("<option value=" + data[i].id + ">" + psuList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getRam", function(data) {
        for (var i = 0; i < data.length; i++) {
            ramList[i] = data[i].size + " GB";
            $("#ram").append("<option value=" + data[i].id + ">" + ramList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getStorage", function(data) {
        for (var i = 0; i < data.length; i++) {
            storageList[i] = data[i].type + " " + data[i].size + " GB";
            $("#storage").append("<option value=" + data[i].id + ">" + storageList[i] + " - $" + data[i].price + "</option>");
        }
    });
    $.get("/getPC", function(data) {
        var list = "";
        var caseID;
        var coolerID;
        var cpuID;
        var gpuID;
        var monitorID;
        var motherboardID;
        var osID;
        var psuID;
        var ramID;
        var storageID;
        for (var i = 0; i < data.length; i++) {
            caseID = parseInt(data[i].casing_id-1);
            coolerID = parseInt(data[i].cooler_id-1);
            cpuID = parseInt(data[i].cpu_id-1);
            gpuID = parseInt(data[i].gpu_id-1);
            monitorID = parseInt(data[i].monitor_id-1);
            motherboardID = parseInt(data[i].motherboard_id-1);
            osID = parseInt(data[i].os_id-1);
            psuID = parseInt(data[i].psu_id-1);
            ramID = parseInt(data[i].ram_id-1);
            storageID = parseInt(data[i].storage_id-1);

            var thisCase = caseList[caseID];
            var thisCooler = coolerList[coolerID];
            var thisCpu = cpuList[cpuID];
            var thisGpu = (gpuID < 0) ? "NONE" : gpuList[gpuID];
            var thisMonitor = (monitorID < 0) ? "NONE" : monitorList[monitorID];
            var thisMotherboard = motherboardList[motherboardID];
            var thisOs = (osID < 0) ? "NONE" : osList[osID];
            var thisPsu = psuList[psuID];
            var thisRam = ramList[ramID];
            var thisStorage = storageList[storageID];

            list += "<div class='fittedDiv' id='boxList'><p><span class='grayLabel'>Case</span><br>" + thisCase + "</p>";
            list += "<p><span class='grayLabel'>Cooler</span><br>" + thisCooler + "</p>";
            list += "<p><span class='grayLabel'>CPU</span><br>" + thisCpu + "</p>";
            list += "<p><span class='grayLabel'>Graphics</span><br>" + thisGpu + "</p>";
            list += "<p><span class='grayLabel'>Monitor</span><br>" + thisMonitor + "</p>";
            list += "<p><span class='grayLabel'>Motherboard</span><br>" + thisMotherboard + "</p>";
            list += "<p><span class='grayLabel'>Operating System</span><br>" + thisOs + "</p>";
            list += "<p><span class='grayLabel'>Power supply</span><br>" + thisPsu + "</p>";
            list += "<p><span class='grayLabel'>Memory</span><br>" + thisRam + "</p>";
            list += "<p><span class='grayLabel'>Storage</span><br>" + thisStorage + "</p>";
            list += "<p><span class='grayLabel'>Price</span><br>$" + data[i].price.toFixed(2) + "</p></div>";
        }
        $("#pcList").append(list);
    });
}
