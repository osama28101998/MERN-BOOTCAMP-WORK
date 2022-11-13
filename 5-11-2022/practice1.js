function divide(params) {
  return (params1) => params1 / params;
}

function seven(params) {
  return params ? params(7) : 7;
}

function five(params) {
  return params ? params(5) : 5;
}

function times(params) {
  return (p) => p * params;
}

function nine(params) {
  return params ? params(9) : 9;
}

function two(params) {
  return params ? params(2) : 2;
}

apitest();
async function apitest() {
  try {
    const data = await fetch(
      "http://192.168.1.103/SalonService/api/Salonowner/viewnotification?id=9"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// var a = five(divide(seven()));
// var b = two(times(nine()));
// console.log(b);
// testloop();

// function testloop() {
//   for (i = 0; i <= 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
