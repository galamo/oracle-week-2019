const users = [
  { name: "gal", age: 31 },
  { name: "tal", age: 25 },
  { name: "sayef", age: 20 }
];
const searcUser = age => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = users.filter(user => user.age > age);
      if (result.length) resolve(result);
      reject("No User under the requested age");
    }, 3000);
  });
};

async function searchUserAsync() {
  const result = await searcUser(22);
  console.log("result is ready");
  console.log(result);
}
console.log("script start");
searchUserAsync();
console.log("script end");
