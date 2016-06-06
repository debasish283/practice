
var dbConnection = {
	register: function(parameter){
		var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'manager',
	  database : 'guddu'
	});
 
	var qry = 'insert into users values (' + "'" + parameter.firstname + "'" + ',' + "'" + parameter.lastname + "'" + ',' + "'" + parameter.username + "'" +',' + "'" + parameter.bday + "'" + ',' + "'" + parameter.gender + "'" + ',' + "'" + parameter.password + "'" +')';
	console.log(qry);
	connection.connect();
	//console.log(parameter);

	connection.query(qry, function(err, rows, fields) {
	  if (!err)
	    console.log('The solution is: ', rows);
	  else
	    console.log('Error while performing Query.');
	});

	connection.end();
	},
	login: function (parameter){
	//console.log('dbconnection.js');
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'manager',
	  database : 'guddu'
	});
 
	var qry = 'select * from users where username = '+ "'" + parameter.username + "'" + " && password = " + "'" + parameter.password + "'";
	console.log(qry);
	connection.connect();
	//console.log(parameter);

	connection.query(qry, function(err, rows, fields) {
	  if (!err){
	    console.log('The solution is: ', rows);
		return rows;
	}
	  else
	    console.log('Error while performing Query.');
		});

	}

};

module.exports.dbConnection = dbConnection;