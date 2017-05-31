// Import MySQL connection
var connection = require("./config/connection.js");

// Helper function for syntax
function objToSql(ob) {
  var burgerType = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
     burgerType.push(key + "=" + ob[key]);
    }
  }

  return burgerType.toString();
}

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
	}, 

	updateBurger: function(table, objColVals, condition, cb){
		var queryString = "UPDATE burgers";
		queryString += " SET";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString +=  condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;

