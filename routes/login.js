console.log('Login.js');
const express = require('express');
const router = express.Router();
const dbConnection = require('../dbConnection');

router.post('/', function(req, res){

	dbConnection.dbConnection.login(req.body);
	
	if (rows.length > 0){
	    console.log('Rows effected', rows.length);
		res.send('U r logged in');
	}
	else{
	    res.send('Username and password dont match');
	    console.log('Error while performing Query');
	}
});
	

module.exports = router;