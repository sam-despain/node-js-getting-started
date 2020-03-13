const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

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
  .get('prove10', (req, res) => res.render('pages/postform'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function handleMath(req, res) {
	const op = req.query.op;
	const left = Number(req.query.left);
	const right = Number(req.query.right);
	computeMath(res, op, left, right);
}
function handleRate(req, res) {
	const mailType = req.query.mailType;
	const weight = Number(req.query.weight);
	computeRate(res, weight, mailType);
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