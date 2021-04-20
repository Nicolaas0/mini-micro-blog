import React from 'react';
import './index.css';
import { useState } from 'react';

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
        <div className='result'>
            {
                data.map((d) => (
                    <div className='dataPrev' key={d.id}>
                        <h3>{d.username}</h3>
                        <p>{d.message}</p>
                        <div>Like:{d.like }</div>
                    </div>
                ))
            }
        </div>
    );
}

export default Result;