var totalcount = {};

const users = [
  { firstName: "Mark", lastName: "Zukerberg", age: 38 },
  { firstName: "John", lastName: "Micheal", age: 38 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Mask", age: 50 },
  { firstName: "Charlize", lastName: "Theron", age: 47 },
  { firstName: "Tom", lastName: "Hardy", age: 75 },
];

var res = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(res);
// users.forEach((e) => {
//   if (e.age in totalcount) {
//     totalcount[e.age] = totalcount[e.age] + 1;
//   } else {
//     totalcount[e.age] = 1;
//   }
// });
// console.log(totalcount);
