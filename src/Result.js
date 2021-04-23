import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import ResultShow from './resultShow';

const Result = () => {
    const [data, setData] = useState(null);
  
  const handleDelete = (id) => {
    const del = data.filter(dat => dat.id !== id);
    setData(del);
  }

  useEffect(
    () => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setData(data);
        });
    },
    [],
  );

  return (
    <React.StrictMode>
      <div>
        {data&& <ResultShow val={data} del={handleDelete} />}
        {/* <ResultShow val={data.filter((dat)=>dat.username === '@nicolaas')} title='Nicolaas comments'/> */}
      </div>
    </React.StrictMode>
  );
}

export default Result;