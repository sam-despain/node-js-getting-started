const cpuModel = require("../models/cpuModel.js");

function getCpuList(req, res) {
	cpuModel.getAllCpus(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getCpuList: getCpuList
};
