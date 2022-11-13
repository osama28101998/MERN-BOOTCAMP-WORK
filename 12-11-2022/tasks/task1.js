var list = [];
function acceptarr(params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    if (parseInt(params[i]).toString() != "NaN") {
      list.push(parseInt(params[i]));
    } else if (params[i] == "c") {
      list.pop();
    } else if (params[i] == "d") {
      let x = list[list.length - 1] * list[list.length - 1];
      list.push(x);
    } else if (params[i] == "+") {
      let a = list[list.length - 1];
      let b = list[list.length - 2];
      list.push(parseInt(a) + parseFloat(b));
    }
  }

  console.log(list);
  for (var i in list) {
    sum += list[i];
  }
  console.log("Sum of List :" + sum);
}

//var array = ["4", "5", "c", "d", "+"];
//var array = ["4", "5", "c", "d", "+"];
var array = ["5", "6", "5", "c", "d", "+"];
acceptarr(array);
