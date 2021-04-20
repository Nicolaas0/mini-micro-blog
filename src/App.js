import React from 'react';
import Navbar from './navbar';
import Form from './Form'
import Result from './Result'

function app() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Form />
        <Result />
      </div>
    </div>
  );
}

export default app;