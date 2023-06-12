/*1/Write a function that takes an array of numbers and returns the sum of the array./*/
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4]));
  
  /*2/Write a function that takes an array of strings and returns the longest string in the array./*/
function findLongestString(strings) {
    let longestString = '';
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i];
        }
    }
    return longestString;
}
console.log(findLongestString(['Seydenu', 'Manchester', 'cherry']));
  
  /*3/Write a function that takes an array of numbers and returns an array of the even numbers in the array./*/
  function getEvenNumbers(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

  /*4/Write a function that takes an array of numbers and returns an array of the numbers in reverse order./*/
  function reverseArray(numbers) {
    let reversedArray = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
      reversedArray.push(numbers[i]);
    }
    return reversedArray;
  }
  console.log(reverseArray([1, 2, 3, 4])); 

  /*5/A word is given, write a function to tell if the word is a palindrome./*/
  function isPalindrome(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return word === reversedWord;
  }
  console.log(isPalindrome('radar')); 
  console.log(isPalindrome('hello')); 

  /*6/Create an object called "circle" with a property "radius". Create a method on the object that calculates the circumference of the circle based on its radius./*/
  let circle = {
    radius: 5,
    calculateCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  console.log(circle.calculateCircumference());
  
  
