const coolerModel = require("../models/coolerModel.js");

function getCoolerList(req, res) {
	coolerModel.getAllCoolers(function(err, results) {
		res.json(results);
	});
}

function getCooler(req, res) {
	var id = req.query.id;
	coolerModel.getCoolerById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getCoolerList: getCoolerList,
	getCooler: getCooler
};
