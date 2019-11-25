// promise is an object
// describe async rejection or success

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

// searcUser(22)
//   .then(result => {
//     const [first] = result;
//     return first;
//   })
//   .then(result => {
//     console.log(result.name);
//   })
//   .catch(ex => {
//     console.log(ex);
//   });

searcUser(40)
  .then(result => {
    console.log(result, "user promise result");
  })
  .catch(ex => {
    console.log(ex);
  });
