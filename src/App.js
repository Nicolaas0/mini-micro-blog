import React from 'react';
import Navbar from './navbar';
import Form from './Form'

function app() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Form />
      </div>
    </div>
  );
}

export default app;