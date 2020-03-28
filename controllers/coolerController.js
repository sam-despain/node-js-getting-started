const coolerModel = require("../models/coolerModel.js");

function getCoolerList(req, res) {
	coolerModel.getAllCoolers(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getCoolerList: getCoolerList
};
