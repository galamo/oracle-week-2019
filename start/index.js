const users = [
  { name: "gal", age: 31 },
  { name: "tal", age: 25 },
  { name: "sayef", age: 20 }
];

let userName = "dor";
userName = "gal";

//lets use callback

function getUser(callback, search) {
  setTimeout(() => {
    const result = users.find(user => user.name === search);
    setTimeout(() => {
      callback(result);
    }, 3000);
  }, 2000);
}

getUser(userAsResult => {
  console.log(userAsResult);
}, "gal");
getUser(userAsResult => {
  console.log(userAsResult.age);
}, "tal");
console.log(stamMishtne);
console.log("end of script");
