import React from "react";

const ResultShow = (prop) => {
  const data = prop.val;
  const handleDelete = prop.del;

  return (
    <div className="result-show">
      {data.map((d) => (
        <div className="dataPrev" key={d.id}>
          <div id='uname'>{d.username}</div>
          <p id='msg'>{d.message}</p>
          <div id='like'>Like:{d.like}</div>
          <button onClick={() => handleDelete(d.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ResultShow;
