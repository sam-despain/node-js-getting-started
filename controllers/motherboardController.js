const motherboardModel = require("../models/motherboardModel.js");

function getMotherboardList(req, res) {
	motherboardModel.getAllMotherboards(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getMotherboardList: getMotherboardList
};
