// let num = "322956";
// let count = num.split("");
// // let res;
// // console.log("count", count);
// // for (let index = count; index >= 0; index--) {
// //   console.log(num[index]);
// //   res = res + num[index];
// // }

// //console.log(count.reverse().toString());
// console.log("start");
// setTimeout(() => {
//   console.log("i ma");
// }, 2000);
// console.log("end");
// function callbacktest() {
//   console.log("Callback called");
// }

function test() {
  console.log("hello");
  setTimeout(() => {
    setInterval(() => {
      console.log("Child of firsttimeout called !");
    }, 5000);
    //console.log("timeout 1 call");
  }, 6000);

  console.log("my");
  console.log("name");
  console.log("is");
  setTimeout(() => {
    console.log("Osama");
    setTimeout(() => {
      console.log("last timeout called");
    }, 6000);
  }, 3000);
}

async function apitest() {
  var res = await fetch("https://jsonplaceholder.typicode.com/comments");
  var a = await res.json();
  console.log(a);
}

// apitest();

// const abc = {
//   a: "a",
//   b: "b",
//   c: {
//     d: "d",
//   },
// };

//const { b, ...e } = abc;

// console.log(b, re);

// const arr = [1, 2, 3, 4, 5, 6];
// const [b, c, a, ...re] = arr;
// //const [, , a, ...re] = arr;
// console.log("b=" + b + "c=" + c + "a=" + a + "re=" + re);
