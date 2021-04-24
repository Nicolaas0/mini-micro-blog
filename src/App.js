import React from 'react';
import Navbar from './navbar';
import Result from './Result'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function app() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path='/'>
            <Result/>
          </Route>
          <Result />
        </Switch>
      </div>
      </div>
      </Router>
  );
}

export default app;