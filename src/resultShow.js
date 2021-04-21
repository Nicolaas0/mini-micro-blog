import React from "react";

const ResultShow = (prop) => {
  const data = prop.val;
  console.log(prop, data);

  return (
    <div className="result-show">
      {data.map((d) => (
        <div className="dataPrev" key={d.id}>
          <h3>{d.username}</h3>
          <p>{d.message}</p>
          <div>Like:{d.like}</div>
        </div>
      ))}
    </div>
  );
};

export default ResultShow;
