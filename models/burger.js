var orm = require("../config/orm.js");

var submitButton = 
	$("#burgerCreation").click(function(){
		orm.createBurger();
		$("#uneaten").empty();
		// pushing the updated data into the menu/ uneaten div
	});

module.exports = submitButton;