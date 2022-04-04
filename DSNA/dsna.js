//reverse sentence words

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

//title case words

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// console.log(titleCase('aLcHeMy RoCkS gOlD'));

//oddish vs evenish

function oddishOrEvenish(number) {
  const sumOfDigits = number
    .toString()
    .split('')
    .map((digit) => +digit)
    .reduce((sum, number) => sum + number);

  return sumOfDigits % 2 ? 'Oddish' : 'Evenish';
}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));

// at

function at(arr, index) {
  if (index > -1) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}
console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));
