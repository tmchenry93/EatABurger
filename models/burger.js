var orm = require("../config/orm.js");

var burger = {
	devoured: function(cb){
		orm.selectDevour("burgers", function(res){
			cb(res);
		});
	},

	uneaten: function(cb){
		orm.selectUneaten("burgers", function(res){
			cb(res);
		});
	},

	update: function(objColVals, condition, cb){
		orm.updateBurger("burgers", objColVals, condition, function(res){
			cb(res);
		});
	},

	create: function(cols, vals, cb){
		orm.createBurger("burgers", cols, vals, function(res){
			cb(res);
		});
	}
};

module.exports = burger;