import React from 'react';
import './index.css';
import { useState } from 'react';
import ResultShow from './resultShow';

const Result = () => {
    const [data, setData] = useState( [
      {
        username: "@nicolaas",
        message: "Wow it is so cool",
        like: 120,
        id: 1,
      },
      {
        username: "@nadine",
        message: "no it is so dumb!",
        like: 2,
        id: 2,
      },
      {
        username: "@49384029",
        message: "Get a promo in hihi Chicken, 30% Off!",
        like: 0,
        id: 3,
      }
    ]);

  return (
    <React.StrictMode>
      <div>
        <ResultShow val={data} />
        <ResultShow val={data.filter((dat)=>dat.username === 'nicolaas')} title='Nicolaas comments'/>
      </div>
    </React.StrictMode>
  );
}

export default Result;