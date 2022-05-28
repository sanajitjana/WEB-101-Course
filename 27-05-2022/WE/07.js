// OBJECTS MAPPING
// You have an array of objects that stores firstName and lastName values of your friends as follows:
// Output should look like
// ["Nrupul Dev", "Prateek Shukla", "Yogesh Bhat"]


let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let ans=users.map(function(ele){
  return ele.firstName+" "+ele.lastName;
})

console.log(ans);