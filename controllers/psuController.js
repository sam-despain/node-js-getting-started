const psuModel = require("../models/psuModel.js");

function getPsuList(req, res) {
	psuModel.getAllPsus(function(err, results) {
		res.json(results);
	});
}

function getPsu(req, res) {
	var id = req.query.id;
	psuModel.getPsuById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getPsuList: getPsuList,
  getPsu: getPsu
};
