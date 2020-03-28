const osModel = require("../models/osModel.js");

function getOsList(req, res) {
	osModel.getAllOs(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getOsList: getOsList
};
