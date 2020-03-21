const caseModel = require("../models/caseModel.js");

function getCaseList(req, res) {
	caseModel.getAllCases(function(err, results) {
		res.json(results);
	});
}

function getCase(req, res) {
	var id = req.query.id;
	caseModel.getCaseById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getCaseList: getCaseList,
	getCase: getCase
};
