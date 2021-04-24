import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import ResultShow from "./resultShow";

const Result = () => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setError] = useState(null);

  const handleDelete = (id) => {
    const del = data.filter((dat) => dat.id !== id);
    setData(del);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching data.");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          setError(null)
        })
        .catch((err) => {
          setisLoading(false);
          setError(err.message)
        });
    }, 1000);
  }, []);

  return (
    <React.StrictMode>
      <div>
        {isError && <div>{isError}</div>}
        {isLoading && <div>Loading...</div>}
        {data && <ResultShow val={data} del={handleDelete} />}
      </div>
    </React.StrictMode>
  );
};

export default Result;
