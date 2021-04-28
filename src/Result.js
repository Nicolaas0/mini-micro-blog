import React from "react";
import "./index.css";
import ResultShow from "./resultShow";
import useFetch from "./useFetch";

const Result = () => {
  const {data, isLoading, isError } = useFetch("http://localhost:3000/blogs");

  return (
    <React.StrictMode>
      <div>
        {isError && <div>{isError}</div>}
        {isLoading && <div>Loading...</div>}
        {data && <ResultShow val={data} />}
      </div>
    </React.StrictMode>
  );
};

export default Result;
