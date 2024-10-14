module.exports = function toReadable (number) {
    const singleNumber = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" };
    const teens = { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };
    const tens = { 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety" };
    
    if (number === 0) return "zero";  

    let result = [];
    if (Math.floor(number / 100) > 0) {
        result.push(singleNumber[Math.floor(number / 100)] + " hundred");
        number %= 100;
    }

    if (number >= 10 && number <= 19) {
        result.push(teens[number]);
    } else { 
        if (Math.floor(number / 10) > 1) {
            result.push(tens[Math.floor(number / 10)]);
        }
        if (number % 10 > 0) {
            result.push(singleNumber[number % 10]);
        }
    }

    return result.join(' ').trim();
}
