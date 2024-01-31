const words = [
    'radar',
    'level',
    'civic',
    'racecar',
    'madam',
    'refer',
    'deed',
    'noon',
    'kayak',
    'asd'
];

function getPalindromes(words) {
    const palindromes = words.filter(word => {
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });

    return palindromes;
}

console.log(getPalindromes(words));