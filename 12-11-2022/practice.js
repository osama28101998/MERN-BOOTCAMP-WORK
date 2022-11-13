// console.log(xyz);
// let xyz = 10;
// console.log(xyz);
// //

let ob = {
  firstname: "osama",
  lastname: "shahzad",
  address: {
    city: "rwp",
    country: "pk",
    uniaddress() {
      return this;
      //   return `${ob.address.city}  ${ob.address.country}`;
    },
  },
};

console.log(ob.address.uniaddress());
