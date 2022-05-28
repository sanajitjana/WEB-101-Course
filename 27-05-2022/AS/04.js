// ARRAY ODD LENGTH STRINGS SUM- HOF
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

let arr=["A", "Good", "Problem"];

let ans=arr.filter(function(ele){
  return ele.length%2==1;
}).reduce(function(acc,ele){
  return acc+ele.length;
},0)

console.log(ans);