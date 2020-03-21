const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

function getAllStorage(callback) {
  var sql = "SELECT id, type, size, price FROM storage";
  pool.query(sql, function(err, dbResult) {
		if (err) {
			throw err;
		} else {
			var results = dbResult.rows;
			callback(null, results);
		}
	});
}
function getStorageById(id, callback) {
  var sql = "SELECT id, type, size, price FROM storage WHERE id=$1::int";
  var pastorages = [id];

  pool.query(sql, pastorages, function(err, dbResult) {
		if (err) {
			throw err;
		} else {
      console.log("Back from database with: " + JSON.stringify(dbResult.rows));
			var results = JSON.stringify(dbResult.rows);
			callback(null, results);
		}
	});
}
module.exports = {
  getAllStorage: getAllStorage,
  getStorageById: getStorageById
};
