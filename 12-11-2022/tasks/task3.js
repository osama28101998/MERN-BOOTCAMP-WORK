function checkpair(params1, params2) {
  for (let i = 0; i < params1.length - 1; i++) {
    for (let j = 0; j < params1.length; j++) {
      if (params1[i] + params1[j] == params2) {
        console.log(
          "Pair of " + params2 + " is (" + params1[i],
          params1[j] + ")"
        );
      } else {
        console.log("No pairs");
      }
    }
  }
}

var arr = [3, 2, 4, 6, 8];
var num = 5;
checkpair(arr, num);
