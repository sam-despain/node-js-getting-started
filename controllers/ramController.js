const ramModel = require("../models/ramModel.js");

function getRamList(req, res) {
	ramModel.getAllRam(function(err, results) {
		res.json(results);
	});
}

function getRam(req, res) {
	var id = req.query.id;
	ramModel.getRamById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getRamList: getRamList,
  getRam: getRam
};
