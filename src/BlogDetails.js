import React from "react";
import "./index.css";
import useFetch from "./useFetch";
import BDShow from './BDShow';
import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="dataPrev">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <article>
          <h2>{data.username}</h2>
          <p id="msg">{data.message}</p>
          <div id="like">Like:{data.like}</div>
          <img
            className="ic"
            src="https://img.icons8.com/material-sharp/50/000000/facebook-like.png"
          />
          <img
            className="ic"
            src="https://img.icons8.com/material-sharp/24/000000/thumbs-down.png"
          />
          <img
            className="ic"
            src="https://img.icons8.com/material-outlined/50/000000/add-trash.png"
          />
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
