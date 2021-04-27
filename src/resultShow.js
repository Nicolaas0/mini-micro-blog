import React from "react";
import { Link, useParams } from "react-router-dom";

const ResultShow = (prop) => {
  const data = prop.val;
  const { id } = useParams();

  const slim = (m) => {
    if (m.length > 200) {
     m = `${m.substring(0, 200)}...`; 
    } else {
      m = m;
    }
    return m;
  };

  return (
    <div className="result-show">
      {data.map((d) =>(
        <div className="dataPrev" key={d.id}>
          <div id="uname">{d.username}</div>
          <p id="msg">{slim(d.message)}</p>
          <Link to={`/blog/${d.id}`}>
            <div>Read More</div>
          </Link>
          <div id="like">Like:{d.like}</div>
        </div>
      ))}
    </div>
  );
    }
export default ResultShow;
