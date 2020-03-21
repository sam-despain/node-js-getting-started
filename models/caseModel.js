const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

function getAllCases(callback) {
    var sql = "SELECT id, type, price FROM casing";
    pool.query(sql, function(err, dbResult) {
		if (err) {
			throw err;
		} else {
			var results = dbResult.rows;
			callback(null, results);
		}
	});
}
function getCaseById(id, callback) {
    var sql = "SELECT id, type, price FROM casing WHERE id=$1::int";
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
    getAllCases: getAllCases,
    getCaseById: getCaseById
};
