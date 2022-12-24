import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [detail, setdetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostdetail();
  }, []);

  const getPostdetail = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const response = await data.json();

    setdetail(response);
    console.log("------------");

    console.log(detail);
    console.log("------------");
    //setdetail(response);
  };

  return (
    <div>
      <h1 className="bg-red-600 text-white px-5 py-3 text-center">
        Title : {detail.title}
      </h1>
      <p className="bg-green-400 text-white px-5 py-3"> Body : {detail.body}</p>
    </div>
  );
};

export default PostDetail;
