import Description from "./practice";
import Animal from "./task3";
import Users from "./Users";

const WelcomeUser = () => {
  //let uname = "a";
  //   let user = {
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
  //   return <div>{<Description des={user} />}</div>;

  let obj = {
    name: "Muhammad Osama",
    address: "Rawalpindi",
    age: 24,
    post: [
      { id: 1, des: "you like it" },
      { id: 5, des: "----------" },
      { id: 3, des: "--abcd-----" },
      { id: 8, des: "123456789" },
      { id: 2, des: "abc123456789" },
    ],
  };
  return (
    <div>
      {
        <Users
          name={obj.name}
          age={obj.age}
          address={obj.address}
          post={obj.post}
        />
      }
    </div>
  );
  //   return <div>{<Animal name="dog" />}</div>;
  //   return <div>Welcome {uname == "" ? <Guest /> : <User />}</div>;
};

export default WelcomeUser;

// const comp1 = ({ children }) => {
//   return <>{children}</>;
// };
// const comp2 = () => {};
// const comp3 = () => {};
