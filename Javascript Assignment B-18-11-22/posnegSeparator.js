function posnegseparator(params) {
  let obj = {
    positive: [],
    negative: [],
  };
  params.forEach((element) => {
    if (element >= 0) {
      obj.positive.push(element);
    } else {
      obj.negative.push(element);
    }
  });
  return obj;
}

let arr = [2, 4, -9, 10, -5, -24, 3, 6];

console.log(posnegseparator(arr));
