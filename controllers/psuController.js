const psuModel = require("../models/psuModel.js");

function getPsuList(req, res) {
	psuModel.getAllPsus(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getPsuList: getPsuList
};
