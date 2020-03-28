const ramModel = require("../models/ramModel.js");

function getRamList(req, res) {
	ramModel.getAllRam(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getRamList: getRamList
};
