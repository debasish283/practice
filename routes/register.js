console.log('Coming here');
const express = require('express');
const router = express.Router();
const dbConnection = require('../dbConnection');

router.post('/', function(req, res){

	dbConnection.dbConnection.register(req.body);
	// console.log(req.body);
	console.log('Hi I am here');
	res.send('U r registered');
	// console.log(req.body.fname);
	// console.log(req.body.lname);
	// console.log(req.body.uname);
	// console.log('>>>>>>>>>>>>>>>>>');
	// console.log(req.body.job);
	// res.send(req.body.name);
});

module.exports = router;