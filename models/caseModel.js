const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

function getAllCases(callback) {
    var sql = "SELECT id, type, price FROM casing ORDER BY id";
    pool.query(sql, function(err, dbResult) {
		if (err) {
			throw err;
		} else {
			var results = dbResult.rows;
			callback(null, results);
		}
	});
}
module.exports = {
    getAllCases: getAllCases
};
