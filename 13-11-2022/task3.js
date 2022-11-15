const users = [
  { firstName: "Mark", lastName: "Zukerberg", age: 38 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Mask", age: 50 },
  { firstName: "Charlize", lastName: "Theron", age: 47 },
  { firstName: "Tom", lastName: "Hardy", age: 75 },
];

var result = users.filter((a) => a.age < 50);
console.log(result);
