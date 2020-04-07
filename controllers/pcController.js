const pcModel = require("../models/pcModel.js");

function postPC(req, res) {
    var casing = req.body.casing;
    var cooler = req.body.cooler;
    var cpu = req.body.cpu;
    var gpu = req.body.gpu;
    if (gpu < 1)
        gpu = null;
    var monitor = req.body.monitor;
    if (monitor < 1)
        monitor = null;
    var motherboard = req.body.motherboard;
    var os = req.body.os;
    if (os < 1)
        os = null;
    var psu = req.body.psu;
    var ram = req.body.ram;
    var storage = req.body.storage;
    var price = req.body.total;
    pcModel.insertNewPC(casing, cooler, cpu, gpu, monitor, motherboard, os, psu, ram, storage, price);
    res.redirect('/thepcshoppe');
}
function getPCList(req, res) {
	pcModel.getAllPCs(function(err, results) {
		res.json(results);
	});
}

module.exports = {
    postPC: postPC,
    getPCList: getPCList
};
