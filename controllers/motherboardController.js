const motherboardModel = require("../models/motherboardModel.js");

function getMotherboardList(req, res) {
	motherboardModel.getAllMotherboards(function(err, results) {
		res.json(results);
	});
}

function getMotherboard(req, res) {
	var id = req.query.id;
	motherboardModel.getMotherboardById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getMotherboardList: getMotherboardList,
  getMotherboard: getMotherboard
};
