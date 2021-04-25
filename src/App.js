import React from 'react';
import Navbar from './navbar';
import Result from './Result';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function app() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Result />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default app;