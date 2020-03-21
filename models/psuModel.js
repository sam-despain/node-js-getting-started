const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

function getAllPsus(callback) {
  var sql = "SELECT id, wattage, price FROM psu";
  pool.query(sql, function(err, dbResult) {
		if (err) {
			throw err;
		} else {
			var results = dbResult.rows;
			callback(null, results);
		}
	});
}
function getPsuById(id, callback) {
  var sql = "SELECT id, wattage, price FROM psu WHERE id=$1::int";
  var params = [id];

  pool.query(sql, params, function(err, dbResult) {
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
  getAllPsus: getAllPsus,
  getPsuById: getPsuById
};
