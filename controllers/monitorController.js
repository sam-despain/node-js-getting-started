const monitorModel = require("../models/monitorModel.js");

function getMonitorList(req, res) {
	monitorModel.getAllMonitors(function(err, results) {
		res.json(results);
	});
}

function getMonitor(req, res) {
	var id = req.query.id;
	monitorModel.getMonitorById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getMonitorList: getMonitorList,
  getMonitor: getMonitor
};
