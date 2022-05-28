// ARRAY STRING FIRST CHARACTER - HOF
// Given an array of string generate an array with their first characters
// Sample Input - ["Masai", "School"]
// Sample Output - ["M", "S"]

let arr=["Masai", "School"];
let ans=arr.map(function(ele){
  return ele[0];
})
console.log(ans);