const express = require('express');
const path = require('path');
const session = require('express-session');
//const teamactivity2 = require('teamactivity12.js');
const PORT = process.env.PORT || 5000;

express()
    .use(session({
        secret: 'mySecret',
        resave: false,
        saveUninitialized: true
    }))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, 'public')))
    .use(logRequest)
    .get('/', (req, res) => res.render('pages/teamactivity12'))
    .get('/getServerTime', verifyLogin, getServerTime)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .post('/login', handleLogin)
    .post('/logout', handleLogout)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function handleLogin(req, res) {
    var result = {success: false};

    if (req.body.username == 'admin' && req.body.password == 'password') {
        req.session.user = req.body.username;
        result = {success: true};
    }
    res.json(result);
}
function handleLogout(req, res) {
    var result = {success: false};

    if (req.session.user) {
        req.session.destroy();
        result = {success: true};
    }
    res.json(result);
}
function getServerTime(req, res) {
    var time = new Date();
    var result = {success: true, time: time};
    res.json(result);
}
function verifyLogin(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        var result = {success: false, message: "ACCESS DENIED"};
        res.status(401).json(result);
    }
}
function logRequest(req, res, next) {
	console.log("Received a request for: " + req.url);

	// don't forget to call next() to allow the next parts of the pipeline to function
	next();
}
