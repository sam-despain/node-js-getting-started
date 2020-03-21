const storageModel = require("../models/storageModel.js");

function getStorageList(req, res) {
	storageModel.getAllStorage(function(err, results) {
		res.json(results);
	});
}

function getStorage(req, res) {
	var id = req.query.id;
	storageModel.getStorageById(id, function(err, result) {
		res.json(result);
	});
}
module.exports = {
	getStorageList: getStorageList,
  getStorage: getStorage
};
