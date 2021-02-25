module.exports = function toReadable(number) {
    let num  = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let nor  = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (number < 10) {
        return num[number % 10];
    }
    if (number > 9 && number < 20) {
        return nor[number % 10];
    }
    if (number > 19 && number < 100) {
        if (number % 10 === 0) {
            return tens[number / 10];
        }
        else {
            return tens[Math.trunc(number / 10)] + " " + num[number % 10];
        }
    }
    if (number > 99) {
        if (number % 100 === 0) {
            return num[Math.trunc(number / 100)] + " hundred"; 
        }
        if (number % 100 < 10) {
            return num[Math.trunc(number / 100)] + " hundred " + num[number % 100];
        }
        if (number % 100 > 9 && number % 100 < 20) {
            return num[Math.trunc(number / 100)] + " hundred " + nor[(number % 100) % 10];
        }
        if (number % 100 > 19 && number % 100 < 100) {
            if ((number % 100) % 10 === 0) {
                return num[Math.trunc(number / 100)] + " hundred " + tens[(number % 100) / 10];
            }
            else {
                return num[Math.trunc(number / 100)] + " hundred " + tens[Math.trunc((number % 100) / 10)] + " " + num[(number % 100) % 10];
            }
        }
    }
}
