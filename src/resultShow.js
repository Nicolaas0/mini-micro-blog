import React from "react";

const ResultShow = (prop) => {
  const data = prop.val;
  const handleDelete = prop.del;

  return (
    <div className="result-show">
      {data.map((d) => (
        <div className="dataPrev" key={d.id}>
          <div>{d.username}</div>
          <p>{d.message}</p>
          <div>Like:{d.like}</div>
          <button onClick={() => handleDelete(d.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ResultShow;
