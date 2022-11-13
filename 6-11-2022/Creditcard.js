//write a javascript program to check credit card number
//testcases
//1234-1234-1234-1234 valid
//1234-12bc-1234-1234 invalid
//1234-12bc-1234-1234 invalid
//1234-12bc-1234-1234 invalid

function creditcardcheck() {
  var num = "1a34-1av4-1234-1234";
  var arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  let val = num.split("-");
  for (let index = 0; index < val.length; index++) {
    result = result + val[index];
  }
  let count = result.length;
  let v = 0;
  if (count > 15 && count < 17) {
    for (let i = 0; i < count; i++) {
      if (arr.includes(result[i])) {
        console.log("char found");
      } else {
        v++;
      }
    }
    // console.log(v);
  } else {
    alert("Length must be 16");
  }
  if (v == 16) {
    alert("Credit Card is valid");
  } else {
    alert("Credit Card is not valid");
  }
}

creditcardcheck();
