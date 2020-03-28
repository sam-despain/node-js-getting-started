const monitorModel = require("../models/monitorModel.js");

function getMonitorList(req, res) {
	monitorModel.getAllMonitors(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getMonitorList: getMonitorList
};
