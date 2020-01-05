const NUMBERS = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
const DOZENS = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
module.exports = toReadable = n => {
    if(n===0) {
        return 'zero';
    }
    n = `00${n}`.substr(-3).match(/^(\d{1})(\d{2})$/);
    return `${(n[1] != 0) ? (NUMBERS[Number(n[1])] || DOZENS[n[1][0]] + ' ' + NUMBERS[n[1][1]]) + 'hundred ' : ''}${((n[2] != 0) ? (NUMBERS[Number(n[2])] || DOZENS[n[2][0]] + ' ' + NUMBERS[n[2][1]]) : '')}`.trim();
};
