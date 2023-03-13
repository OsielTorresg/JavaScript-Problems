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
