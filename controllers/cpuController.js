const cpuModel = require("../models/cpuModel.js");

function getCpuList(req, res) {
	cpuModel.getAllCpus(function(err, results) {
		res.json(results);
	});
}

function getCpu(req, res) {
	var id = req.query.id;
	cpuModel.getCpuById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getCpuList: getCpuList,
  getCpu: getCpu
};
