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

// console.log(oddishOrEvenish(121));
// console.log(oddishOrEvenish(41));

// at

function at(arr, index) {
  if (index > -1) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}
// console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
// console.log(at(['a', 'b', 'c', 'd', 'e'], -2));

// sorting

['a', 'b', 'Aa', 'AA', 'bB', 'bb'].sort();
[1, 2, 10, 50, 500, 90].sort();

//remove duplicates

const numbers = [1, 1, 1, 2, 3, 4];
const unique = new Set(numbers);
const uniqueArray = [...unique];

//fizz buzz

function fizzBuzz(number) {
  const list = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('FizzBuzz');
    } else if (i % 3 === 0) {
      list.push('Fizz');
    } else if (i % 5 === 0) {
      list.push('Buzz');
    } else {
      list.push(i);
    }
  }
  return list;
}
// console.log(fizzBuzz(16));
// anagrams

function anagrams(wordOne, wordTwo) {
  const first = wordOne.split('').sort().join('');
  const second = wordTwo.split('').sort().join('');

  return first === second;
}
console.log(anagrams('pictorialness', 'documentarily'));

// unique string

function uniqueString(strings) {
  const orderedUniqueLetters = strings.map((s) => [...new Set(s)].sort());
  const duplicates = [...new Set(...orderedUniqueLetters)];

  return strings.find(string) => {
    return duplicates.indexOf(string[0]) === -1;

  }
}
console.log(uniqueString(['abc', 'acb', 'bac', 'foo', 'bar']))