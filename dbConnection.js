function dbConnection(parameter){
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'manager',
	  database : 'guddu'
	});

	var qry = 'insert into users ( ' + parameter.firstname +',' + parameter.lastname + ',' + parameter.username +',' + parameter.bday +',' + parameter.gender +',' + parameter.password +')';
	console.log(qry);
	// connection.connect();
	// console.log(parameters);

	// connection.query('', function(err, rows, fields) {
	//   if (!err)
	//     console.log('The solution is: ', rows);
	//   else
	//     console.log('Error while performing Query.');
	// });

	// connection.end();
}

module.exports.dbConnection = dbConnection;