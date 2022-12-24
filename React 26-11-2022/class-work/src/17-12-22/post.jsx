import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
export default function Post() {
  const [loader, setloader] = useState(true);
  const [postData, setpostData] = useState([]);
  //  const navigate = useNavigate();
  useEffect(() => {
    GetPost();
  }, []);

  const GetPost = async () => {
    try {
      setloader(false);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setpostData(data);

      setloader(true);
    } catch (error) {
      console.log(error);
    }
  };
  //   const handleclick = (params) => {
  //     navigate(`/Post-detail/${params}`);
  //   };
  return loader ? (
    <div>
      {postData.map((element) => (
        <div>
          <li>
            <Link to={`/Post-detail/${element.id}`}> {element.title}</Link>
            <br />
          </li>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-content-center justify-center my-80">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}
