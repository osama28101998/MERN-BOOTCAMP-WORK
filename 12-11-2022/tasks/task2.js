function arrofarr(params) {
  var arr = [
    [1, 7, 8, 4, 3, 4, 5, 8],
    [2, 5, 9, 3, 9, 6],
    [5, 7, 9, 11, 13, 13, 11],
  ];

  var a = arr[0];
  var b = arr[1];
  var c = arr[2];
  var res1 = a.filter((x) => {
    return a.findIndex((y) => y == x) == a.lastIndexOf(x);
  });

  var res2 = b.filter((j) => {
    return b.findIndex((k) => k == j) == b.lastIndexOf(j);
  });

  var res3 = c.filter((e) => {
    return c.findIndex((f) => f == e) == c.lastIndexOf(e);
  });
  console.log(res1.sort());
  let aMax = res1.pop();
  console.log(res2.sort());
  let bMax = res2.pop();
  console.log(res3.sort());
  let cMax = res3.pop();

  console.log("Array 1 :" + aMax);
  console.log("Array 2 :" + bMax);
  console.log("Array 3 :" + cMax);
}

arrofarr();
