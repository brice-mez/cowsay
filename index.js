const myInformation = require('./information.js');



var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `my name is ${myInformation.name} and i learn code at ${myInformation.campus}`,
	e : "oO",
	T : "U "
}));









