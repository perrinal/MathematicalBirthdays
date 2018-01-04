var ErathostenesSieve = require('../ErathostenesSieve.js');

var startDate = new Date(Date.now());
var ES = new ErathostenesSieve();
var myPrimes = ES.getPrimes();
var stopDate = new Date(Date.now());

console.log(myPrimes);
console.log("it took : " + (stopDate.getMilliseconds() - startDate.getMilliseconds()) + " ms");
