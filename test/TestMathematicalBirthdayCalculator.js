var MathematicalBirthdayCalculator = require('../MathematicalBirthdayCalculator.js');

var MBC = new MathematicalBirthdayCalculator(1980,2,22,21,00,00);
console.log("Date: " + MBC.getDate());
//console.log(MBC.getPrimeBirthdays(new Date(2100,1,1) , 100, true));

//console.log("Birthday day numbers:");
//console.log(MBC.getDaysBirthdaysNumbers());
//console.log("PI Birthday day numbers:");
//console.log(MBC.getPIBirthdaysNumbers());
//console.log("Prime birthday day numbers: ");
//console.log(MBC.getPrimeBirthdaysNumbers());
console.log("All birthday dates: ");
console.log(MBC.generateAllBirthdaysDates());