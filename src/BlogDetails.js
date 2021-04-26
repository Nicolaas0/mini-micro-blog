import React from 'react';

const blogDetails = (prop) => {
    const data = prop.val;
   
    return (
      <div className="blog-details">
        {data.map((d) => (
          <div className="dataPrev">
            <div id="uname">{d.username}</div>
            <p id="msg">{d.message}</p>
            <div id="like">Like:{d.like}</div>
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
          </div>
        ))}
      </div>
    );
}

export default blogDetails;