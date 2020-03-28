const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

function insertNewPC(callback) {
    var sql = "INSERT INTO pc (casing_id, cooler_id, cpu_id, gpu_id, monitor_id, motherboard_id, os_id, psu_id, ram_id, storage_id, price) VALUES (3, 3, 3, 4, 8, 3, 4, 3, 5, 2, 9)";
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
  insertNewPC: insertNewPC
};
