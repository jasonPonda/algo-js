let numbers = [1, 2, 3];
let numbersCopy = [...numbers];
numbersCopy.push(4);

console.log(numbers, numbersCopy);

let arr = ["a", "b", "c", "d"];

let copy = Array.from(arr);

console.log(arr, copy);