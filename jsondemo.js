const user = {
  firstName: "Sammy", // keys of a JavaScript object can be quoted or unquoted if they are valid identifiers
  lastName: "Shark",
  age: 25,
  followers: 987,
};
// we can access properties with dot notation
// Object.getOwnPropertyNames(user); // array
// console.log(Object.getOwnPropertyNames(user));

// console.log(user[Object.getOwnPropertyNames(user)[0]]);

console.log(user.firstName); // Sammy
console.log(user.age); // 25
// or with array style square bracket syntax
console.log(user["lastName"]); // Shark
user.followers = 988; // we can also assign new values to object properties
console.log("before", user);
user.location = "Pacific Ocean"; // or create new properties

console.log("after", user);

// const person = {
//   firstName: "Sammy", // keys of a JavaScript object can be quoted or unquoted if they are valid identifiers
//   lastName: "Shark",
//   age: 25,
//   followers: 987,
// };

// const person1 = {
//   name: "Sammy", // keys of a JavaScript object can be quoted or unquoted if they are valid identifiers
//   lastName: "Shark",
//   age: 25,
//   followers: 987,
// };

// function helloToPerson(person) {

//     console.log(`hello ${person.firstName}`);
// }
