const Description = (props) => {
  let {
    name: usertype,
    age: userage,
    education: {
      degree: {
        course: { value },
      },
    },
    address: {
      country: {
        value: ucountry,
        city: {
          value: ucity,
          street: { value: ustreet },
        },
      },
    },
  } = props.des;

  console.log(ucountry + " " + ucity + " " + ustreet);
  return (
    <p>
      My name is {usertype} My Age is {userage} I have completed my {value} in
      2018. I live in {ustreet},{ucity} , {ucountry}
    </p>
  );
};

export default Description;
// let user = {
//     id: 229,
//     name: "Admin",
//     age: 20,
//     education: {
//       degree: {
//         course: {
//           value: "BSCS",
//         },
//       },
//     },
//     address: {
//       country: {
//         value: "PK",
//         city: {
//           value: "RWP",
//           street: {
//             value: 14,
//           },
//         },
//       },
//     },
//   };
