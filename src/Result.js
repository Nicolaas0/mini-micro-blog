import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import ResultShow from './resultShow';

const Result = () => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);

  const handleDelete = (id) => {
    const del = data.filter(dat => dat.id !== id);
    setData(del);
  }

  useEffect(
    () => {
      setTimeout(()=>{
              fetch('http://localhost:8000/blogs')
                .then(res => {
                  console.log(res);
          return res.json();
        })
        .then(data => {
          setData(data);
          setisLoading(false);
        })
                .catch(err => {
                  console.log(err.message);
        })
      },1000)
    },
    []
  );

  return (
    <React.StrictMode>
      <div>
        {isLoading && <div>Loading...</div>}
        {data&& <ResultShow val={data} del={handleDelete} />}
        {/* <ResultShow val={data.filter((dat)=>dat.username === '@nicolaas')} title='Nicolaas comments'/> */}
      </div>
    </React.StrictMode>
  );
}

export default Result;