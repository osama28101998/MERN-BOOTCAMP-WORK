async function getUserdata(params) {
  let url = "https://jsonplaceholder.typicode.com/users?id=" + params;
  try {
    let res = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((val) => {
        console.log(val);
      });
  } catch (error) {
    console.log(error);
  }
}

getUserdata(5);
