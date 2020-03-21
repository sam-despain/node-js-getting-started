const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

function getAllCoolers(callback) {
    var sql = "SELECT id, type, price FROM cooler";
    pool.query(sql, function(err, dbResult) {
		if (err) {
			throw err;
		} else {
			var results = dbResult.rows;
			callback(null, results);
		}
	});
}
function getCoolerById(id, callback) {
    var sql = "SELECT id, type, price FROM cooler WHERE id=$1::int";
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
    getAllCoolers: getAllCoolers,
    getCoolerById: getCoolerById
};
