import React from "react";

const ResultShow = (prop) => {
  const data = prop.val;
  const handleDelete = prop.del;

  return (
    <div className="result-show">
      {data.map((d) => (
        <div className="dataPrev" key={d.id}>
          <div id="uname">{d.username}</div>
          <p id="msg">{d.message}</p>
          <div id="like">Like:{d.like}</div>
          <img
            className="ic"
            src="https://img.icons8.com/material-sharp/50/000000/facebook-like.png"
          />
          <img
            className='ic'
            src="https://img.icons8.com/material-sharp/24/000000/thumbs-down.png" />
          <img
            className="ic"
            onClick={() => handleDelete(d.id)}
            src="https://img.icons8.com/material-outlined/50/000000/add-trash.png"
          />
        </div>
      ))}
    </div>
  );
};

export default ResultShow;
