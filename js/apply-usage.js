// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }

let arr = [1,2,3];

console.log(Math.max(arr)); // Would return NaN

console.log(Math.max.apply(null, arr)); // Would return 3
