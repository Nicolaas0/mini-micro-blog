import React from 'react';
import Tweet from './Tweet';

function app() {

  function hello() {
    console.log('Hello!');
  }

  return (
    <div className='app'>
      <h1>Hello react!!</h1>
      <button onClick={hello}>Click me!</button>
      <Tweet/>
    </div>
  );
}

export default app;