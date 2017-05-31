// Import MySQL connection
var connection = require("./config/connection.js");
// Object Relational Mapper (ORM)
var orm = {
	// Select and get data where is
	selectDevour: function(tableInput, colToSearch, valOfCol) {
		var queryString = "SELECT * FROM burgers WHERE devoured = true";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
			console.log(result);
		});
	},

	selectUneaten: function(tableInput, colToSearch, valOfCol) {
		var queryString = "SELECT * FROM burgers WHERE devoured = false";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
			console.log(result);
		});
	},

	createBurger: function(table, cols, vals, cb){
		var queryString = "INSERT INTO burgers(burger_name) VALUES('" + burger + "')";
		connection.query(queryString, [table, cols, vals, cb], function(err, result){
			console.log(result);
		}) 
	}
};

module.exports = orm;

