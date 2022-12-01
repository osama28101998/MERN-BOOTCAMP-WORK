const Users = (props) => {
  console.log(props);
  let posts = props.post;
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Address: {props.address}</h3>
      <h3>Posts:</h3>

      {posts.map((post) => {
        return (
          <div>
            id: {[post].id} Description : {post.des}
          </div>
        );
      })}
    </>
  );
};

export default Users;
