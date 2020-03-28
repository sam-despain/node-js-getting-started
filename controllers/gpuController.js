const gpuModel = require("../models/gpuModel.js");

function getGpuList(req, res) {
	gpuModel.getAllGpus(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getGpuList: getGpuList
};
