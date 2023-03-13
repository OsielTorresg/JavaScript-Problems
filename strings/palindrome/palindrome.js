//Problem2: Given a string, write a function to determine if it is a palindrome.

let str = "racecar";
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome(str));
