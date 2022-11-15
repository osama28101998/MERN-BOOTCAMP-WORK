function countstring(s) {
  let initials = "";
  var a = s.split(" ");
  a.forEach((element) => {
    initials += element[0];
  });
  console.log("Initials  : " + initials);
}
countstring("My name is osama");
