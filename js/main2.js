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
  ];
  
  function checkPalindrom(words) {
    return words.every((str) => {
      const reverseStr = str.split('').reverse().join('');
      return str === reverseStr;
    });
  }
  
  const areAllPalindromes = checkPalindrom(words);
  console.log(areAllPalindromes);