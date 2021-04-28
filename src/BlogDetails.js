import React from "react";
import "./index.css";
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch("http://localhost:3000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:3000/blogs/' + data.id, {
      method: 'DELETE'
    }).then(() => [
      history.push('/')
    ])
  }

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
            onClick={handleDelete}
          />
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
