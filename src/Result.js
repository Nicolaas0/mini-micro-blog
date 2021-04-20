import React from 'react';
import './index.css';
import { useState } from 'react';

const Result = () => {
    const [res, setRes] = useState('Your thoughts will be here...')

    return (
        <div className='result'>
            <p>{res}</p>
        </div>
    );
}

export default Result;