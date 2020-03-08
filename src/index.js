module.exports = function toReadable(number) {
    let str = '';
    let b = number % 10,
        a = (number - b) / 10; // n = 10*a+b
    let hundred = Math.trunc(number / 100);
    A1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (number < 10) { return A1[number]; } else if (number > 10 && number < 20) { return A2[number - 11]; } else if (b == 0 && number < 100) { return A3[a - 1] };
    if (number >= 100 && number < 1000) {
        let dec = number - hundred * 100;
        if (toReadable(dec) == 'zero') { str = A4[hundred - 1] } else {
            str = A4[hundred - 1] + ' ' + toReadable(dec);
        }
        return str;
    }
    str = A3[a - 1] + ' ' + A1[b];

    return str;
}