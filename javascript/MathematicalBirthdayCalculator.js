//var ErathostenesSieve = require('./ErathostenesSieve.js');
class MathematicalBirthdayCalculator{
    constructor(myDate) {
        this._birthdate = new Date(myDate.getTime());
        //this._timezone = timezone;
        this._max = 50000; // we limit the life of a person to 50000 days which is about 155 years
    }
    static sortBirthdayDateArray(barray){
        barray.sort(function(a, b){return a.Number-b.Number});
    }

    getDate(){
        return this._birthdate
    }

    generateAllBirthdaysDates(){
        var AllDays = new Array();
        AllDays = AllDays.concat(this.getDaysBirthdaysNumbers());
        AllDays = AllDays.concat(this.getPrimeBirthdaysNumbers());
        AllDays = AllDays.concat(this.getPIBirthdaysNumbers());
        MathematicalBirthdayCalculator.sortBirthdayDateArray(AllDays);
        //console.log(AllDays);
        return this.generateBirthdaysDates(AllDays);
    }
    addDaystoBirthdate(number){
        return new Date ( this._birthdate.getFullYear(),
                          this._birthdate.getMonth(),
                          this._birthdate.getDate() + number, 
                          this._birthdate.getHours(),
                          this._birthdate.getMinutes(), 
                          this._birthdate.getSeconds());
    }
    generateBirthdaysDates(NumberList , StopDate=new Date(2150,1,1),oldOnes = false){
        //implement generic birthday list creation from a list of days number
        var Birthdays= new Array();
        var Today = new Date(Date.now());
        var Currdate = new Date(0);
        var i = 0;
        //console.log(this._birthdate);
        while (Currdate < StopDate && i < NumberList.length){         
            Currdate = this.addDaystoBirthdate(NumberList[i].Number);
            //console.log(Currdate +":"+ NumberList[i].Number);
            if (Currdate > Today || oldOnes){
                var Label = "None"
                if (NumberList[i].Label)
                {
                    Label = NumberList[i].Label;
                }
                Birthdays.push(
                    {"Date":new Date(Currdate.getTime()),
                     "Number": NumberList[i].Number,
                     "Label": Label
                    }
                    );
            }
            i ++;
        }
        return Birthdays;
    }

    getDaysBirthdaysNumbers(precision=500){
        var BirthdayNumbers = new Array();
        for (var i = precision; i < this._max; i+= precision){
            BirthdayNumbers.push({"Number":i , "Label":i})
        }
        return BirthdayNumbers;
    }

    getPrimeBirthdaysNumbers(precision=50){
        //create a list of date for each Prime number of day since birth date
        
        var PrimeBirthdaysNumbers= new Array();
        var ES = new ErathostenesSieve(this._max);
        var PrimeList = ES.getPrimes();
        for (var i=precision; i<PrimeList.length; i+=precision)
        {
            PrimeBirthdaysNumbers.push({"Number":PrimeList[i], "Label": i + "th Prime"})
        }
        return PrimeBirthdaysNumbers;
    }

    getPIBirthdaysNumbers(limit = this._max, precision = 500){
        var i = 1;
        var PIVals = new Array();
        var SignificantPIValues = [ {Value:Math.PI,                   Label:"PI"} ,
                                    {Value:Math.pow(Math.PI, 2),      Label:"PI square"} , 
                                    {Value:Math.pow(Math.PI, 3),      Label:"PI cube"} ,
                                    {Value:Math.pow(Math.PI, Math.PI),Label:"PI^PI"}];

        while (i * Math.PI < limit  )
        {
            if (i % precision == 0){
                SignificantPIValues.forEach(function(PI) {
                    var CurrentPIValue = i*PI.Value
                    if (CurrentPIValue < limit ){
                        PIVals.push(
                            {"Number":Math.round(CurrentPIValue), 
                             "Label":i+"."+PI.Label});
                    }
                });
            }
            i++;
        }
        //PIVals.sort(function(a, b){return a.Number-b.Number});
        MathematicalBirthdayCalculator.sortBirthdayDateArray(PIVals);
        return PIVals;

    }


    //Weeks
    //Months
    //hours
    //minutes
    //seconds

    
    

}
//module.exports =  MathematicalBirthdayCalculator;