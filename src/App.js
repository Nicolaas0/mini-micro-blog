import React from 'react';

function app() {

  function hello() {
    console.log('Hello!');
  }

  return (
    <div>
      <h1>Hello react!!</h1>
      <button onClick={hello}>Click me!</button>
    </div>
  );
}

export default app;