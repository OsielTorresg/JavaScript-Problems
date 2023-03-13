//Problem8: Given a string, write a function to determine if it contains only digits.

function isDigits(str) {
  return /^\d+$/.test(str);
}
