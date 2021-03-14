const simples = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const others = ['zero', ' hundred'];

module.exports = function toReadable (number) {
    if (number === 0) return others[0];
    if (number < 20) return simples[number];
    if (number < 100) return (decimals[ Math.floor(number / 10)]) + (number % 10 === 0 ? '' : ' ' + simples[number % 10]);
    return (simples[Math.floor(number / 100)]) + others[1] + (number % 100 === 0 ? '' : ' ' + toReadable(number%100));
}
