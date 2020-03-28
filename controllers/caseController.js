const caseModel = require("../models/caseModel.js");

function getCaseList(req, res) {
	caseModel.getAllCases(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getCaseList: getCaseList
};
