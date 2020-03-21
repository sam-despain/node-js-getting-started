const osModel = require("../models/osModel.js");

function getOsList(req, res) {
	osModel.getAllOs(function(err, results) {
		res.json(results);
	});
}

function getOs(req, res) {
	var id = req.query.id;
	osModel.getOsById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getOsList: getOsList,
  getOs: getOs
};
