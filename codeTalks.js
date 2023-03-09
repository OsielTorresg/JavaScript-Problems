/* 
--Here are the code talks for the Javascript portion of the Program. 
--These code talks will start from begginer level to advance javascriopt as the program is advancing. 
*/

// ------ FIRST WEEK ----------

//Problem1: Given an array of integers, find the largest number in the array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestNumber(arr));
//Problem2: Given a string, write a function to determine if it is a palindrome.

let str = "racecar";
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome(str));
//Problem3: Given an array of integers, return a new array with all the even numbers.

function evenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
//Problem4: Given a string, write a function to reverse it.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// ------ SECOND WEEK ----------

//Problem5: Given an array of integers, return a new array with all the odd numbers.

function oddNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
//Problem6: Given a string, write a function to count the number of vowels in it.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
//Problem7: Given an array of integers, write a function to find the second largest number in the array.

function secondLargestNumber(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
//Problem8: Given a string, write a function to determine if it contains only digits.

function isDigits(str) {
  return /^\d+$/.test(str);
}

// ------ THIRD WEEK ----------

//Problem9: Given an array of integers, write a function to calculate their sum.

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
