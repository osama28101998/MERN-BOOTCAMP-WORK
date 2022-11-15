const users = [
  { firstName: "Mark", lastName: "Zukerberg", age: 38 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Mask", age: 50 },
  { firstName: "Charlize", lastName: "Theron", age: 47 },
  { firstName: "Tom", lastName: "Hardy", age: 75 },
];

console.log(users.map(getnames));
function getnames(params) {
  return [params.firstName, params.lastName].join(" ");
}
