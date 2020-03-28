const pcModel = require("../models/pcModel.js");

function postPC(req, res) {
    /*var casing = req.query.casing;
    var cooler = req.query.cooler;
    var cpu = req.query.cpu;
    var gpu = req.query.gpu;
    var monitor = req.query.monitor;
    var motherboard = req.query.motherboard;
    var os = req.query.os;
    var psu = req.query.psu;
    var ram = req.query.ram;
    var storage = req.query.storage;
    var price;*/
    pcModel.insertNewPC(function(err, results) {
    //    res.json(results);
    });
    res.redirect('/thepcshoppe');
}

module.exports = {
    postPC: postPC
};
