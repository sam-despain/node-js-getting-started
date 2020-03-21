const gpuModel = require("../models/gpuModel.js");

function getGpuList(req, res) {
	gpuModel.getAllGpus(function(err, results) {
		res.json(results);
	});
}

function getGpu(req, res) {
	var id = req.query.id;
	gpuModel.getGpuById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getGpuList: getGpuList,
  getGpu: getGpu
};
