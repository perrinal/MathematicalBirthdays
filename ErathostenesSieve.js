/* Derived from https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes */
class ErathostenesSieve
{
    constructor(limit = 40000) {
        this._limit = 40000
        if (limit <= 40000){
        this._limit = limit
        }
    }
    getPrimes(){
        var primes = [];
        if (this._limit >= 2) {
            //var sqrtlmt = Math.sqrt(this._limit) - 2;
            var nums = new Array(); 
            for (var i = 2; i <= this._limit; i++) 
                nums.push(i); 
            
            for (var i = 0; i <= this._limit; i++) {
                var p = nums[i]
                if (p)
                    //comnonly used optimisation start looking at numbers after P^2 -2 
                    for (var j = p * p - 2; j < nums.length; j += p)
                        nums[j] = 0;
            }
            for (var i = 0; i < nums.length; i++) {
                var p = nums[i];
                if (p)
                    primes.push(p);
            }
        }
        return primes;
    }
}
module.exports =  ErathostenesSieve;