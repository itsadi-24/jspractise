//What is map()?
//The map() method creates a new array by providing functions on every element of the old array.

//what os filter()?
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//what is reduce()?
//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//it takes iterator,index,original array (JS understands so we generally dont write all three parameters)
// 0 based indexing
// const result = nums.map((num, i, arr) => {
//   return num + i;
// });
// const result = nums.map((num) => {
//   return num > 2;
// });
// const result = nums.filter((num) => {
//   return num > 2;
// });

const numss = [1, 2, 3, 4, 5];

// const result = numss.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(result);

//polyfill of map()
// Array.prototype.adi = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };
// const result = nums.adi((num) => {
//   return num * 2;
// });
// console.log(result);

// the difference between map and filter is that map pushes all the elements while filter pushes elements based on condition

//polyfill of filter

// Array.prototype.adi = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };
// const result = nums.adi((num) => {
//   return num > 2;
// });
// console.log(result);

//polyfil of reduce
// arr.reduce((acc,curr,i,arr) => {}, initialvalue);
// if we fail to give any initial value then it assumes the first element of array as initial value

// Array.prototype.adi = function (cb, initialvalue) {
//   var accumulator = initialvalue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }
//   return accumulator;
// };
// const result = numss.adi((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(result);
