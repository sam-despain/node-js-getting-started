const storageModel = require("../models/storageModel.js");

function getStorageList(req, res) {
	storageModel.getAllStorage(function(err, results) {
		res.json(results);
	});
}
module.exports = {
	getStorageList: getStorageList
};
