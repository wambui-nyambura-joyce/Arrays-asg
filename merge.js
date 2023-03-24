// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
let num = [45,12,6,89,2,5];
let target = 6;
let index = null;
for (let a = 0; a < num.length; a++) {
    if (num[a] === target) {
      index = a; 
      break;
    }
  }
  
  console.log(index);

//   Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
arr.sort(function(x, y) {
    return y - x;
  });
  
  console.log(arr);

//   Given the following array, search for the following target
let targets = 34;
let arr2 = [1,4,78,2,67,3];
let indexing = null;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === targets) {
      indexing = i;
      break;
    }
  }
  
  console.log(indexing);