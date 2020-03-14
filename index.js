const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://despa3:SuperMario3D@localhost:5432/thepcshoppe";
const pool = new Pool({connectionString: connectionString});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/home'))
  .get('/assignments', (req, res) => res.render('pages/assignments'))
  .get('/node', (req, res) => res.render('pages/index'))
  .get('/teamactivity09', (req, res) => res.render('pages/mathform'))
  .get('/math', handleMath)
  .get('/prove09', (req, res) => res.render('pages/postform'))
  .get('/rate', handleRate)
  .get('/prove10', (req, res) => res.render('pages/pcshoppe'))
  .get('/getCase', getCase)
  .get('/getCooler', getCooler)
  .get('/getCpu', getCpu)
  .get('/getGpu', getGpu)
  .get('/getMonitor', getMonitor)
  .get('/getMotherboard', getMotherboard)
  .get('/getOS', getOS)
  .get('/getPsu', getPsu)
  .get('/getRam', getRam)
  .get('/getStorage', getStorage)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/****************
 Team Activity 09
 ****************/
function handleMath(req, res) {
	const op = req.query.op;
	const left = Number(req.query.left);
	const right = Number(req.query.right);
	computeMath(res, op, left, right);
}
function computeMath (res, op, left, right) {
	let result = 0;
	switch (op) {
		case '+':
			result = left + right;
			break;
		case '-':
			result = left - right;
			break;
		case '×':
			result = left * right;
			break;
		case '÷':
			result = left / right;
			break;
	}
	const params = {
		op: op,
		left: left,
		right: right,
		result: result
	};
	res.render('pages/math', params);
}
/********
 Prove 09
 ********/
function handleRate(req, res) {
	const mailType = req.query.mailType;
	const weight = Number(req.query.weight);
	computeRate(res, weight, mailType);
}
function computeRate(res, weight, mailType) {
	let rate = 0;
	
	switch (mailType) {
		case 'Letters (stamped)': 
			if (weight <= 1) {
				rate = .55;
			} else if (weight > 1 && weight <= 2) {
				rate = .7;
			} else if (weight > 2 && weight <= 3) {
				rate = .85;
			} else if (weight > 3 && weight <= 3.5) {
				rate = 1;
			}
			break;
		case 'Letters (metered)':
			if (weight <= 1) {
				rate = .5;
			} else if (weight > 1 && weight <= 2) {
				rate = .65;
			} else if (weight > 2 && weight <= 3) {
				rate = .8;
			} else if (weight > 3 && weight <= 3.5) {
				rate = 95;
			}
			break;
		case 'Large envelopes (flats)': 
			if (weight <= 1) {
				rate = 1;
			} else if (weight > 1 && weight <= 2) {
				rate = 1.2;
			} else if (weight > 2 && weight <= 3) {
				rate = 1.4;
			} else if (weight > 3 && weight <= 4) {
				rate = 1.6;
			} else if (weight > 4 && weight <= 5) {
				rate = 1.8;
			} else if (weight > 5 && weight <= 6) {
				rate = 2;
			} else if (weight > 6 && weight <= 7) {
				rate = 2.2;
			} else if (weight > 7 && weight <= 8) {
				rate = 2.4;
			} else if (weight > 8 && weight <= 9) {
				rate = 2.6;
			} else if (weight > 9 && weight <= 10) {
				rate = 2.8;
			} else if (weight > 10 && weight <= 11) {
				rate = 3;
			} else if (weight > 11 && weight <= 12) {
				rate = 3.2;
			} else if (weight > 12 && weight <= 13) {
				rate = 3.4;
			}
			break;
		case 'First-class package service - Retail':
			if (weight <= 4) {
				rate = 3.8;
			} else if (weight > 4 && weight <= 8) {
				rate = 4.6;
			} else if (weight > 8 && weight <= 12) {
				rate = 5.3;
			} else if (weight > 12 && weight <= 13) {
				rate = 5.9;
			}
			break;
	}
	
	const params = {
		mailType: mailType,
		rate: rate,
		weight: weight
	};
	res.render('pages/rate', params);
}

/********
 Prove 10
 ********/
/*Case*/
function getCase (req, res){
	var id = req.query.id;
	getCaseFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getCaseFromDb(id, callback) {
	var sql = null;
	const params = [id];
	sql = "SELECT * FROM casing WHERE id = $1::int";
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*Cooler*/
function getCooler (req, res){
	var id = req.query.id;
	getCoolerFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getCoolerFromDb(id, callback) {
	var sql = "SELECT * FROM cooler WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*CPU*/
function getCpu (req, res){
	var id = req.query.id;
	getCpuFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getCpuFromDb(id, callback) {
	var sql = "SELECT * FROM cpu WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*GPU*/
function getGpu (req, res){
	var id = req.query.id;
	getGpuFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getGpuFromDb(id, callback) {
	var sql = "SELECT * FROM gpu WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*Monitor*/
function getMonitor (req, res){
	var id = req.query.id;
	getMonitorFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getMonitorFromDb(id, callback) {
	var sql = "SELECT * FROM monitor WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*Motherboard*/
function getMotherboard (req, res){
	var id = req.query.id;
	getMotherboardFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getMotherboardFromDb(id, callback) {
	var sql = "SELECT * FROM motherboard WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*OS*/
function getOS (req, res){
	var id = req.query.id;
	getOsFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getOsFromDb(id, callback) {
	var sql = "SELECT * FROM os WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*PSU*/
function getPsu (req, res){
	var id = req.query.id;
	getPsuFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getPsuFromDb(id, callback) {
	var sql = "SELECT * FROM psu WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*RAM*/
function getRam (req, res){
	var id = req.query.id;
	getRamFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getRamFromDb(id, callback) {
	var sql = "SELECT * FROM ram WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}
/*Storage*/
function getStorage (req, res){
	var id = req.query.id;
	getStorageFromDb(id, function(err, result) {
		if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			res.json(result[0]);
		}
	});
}
function getStorageFromDb(id, callback) {
	var sql = "SELECT * FROM storage WHERE id = $1::int";
	const params = [id];
	pool.query(sql, params, function(err, result) {
		if (err) {
			console.log("Error in query: ");
			console.log(err);
			callback(err, null);
		}
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result.rows);
	});
}