/*
function zipList takes two arrays of
equal length and combines them into a
single alternating array

function zipList takes two arrays of
equal length and combines them using the underscore library

 */

const nums = [1, 2, 3, 4, 5];
const alphas = ['a', 'b', 'c', 'd', 'e'];

function zipList(list1, list2) {
  const newArray = [];
  for (let i = 0; i < list1.length; i += 1) {
    newArray.push(list1[i], list2[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(nums, alphas));
console.log(zipListTheSimpleWay(nums, alphas));
