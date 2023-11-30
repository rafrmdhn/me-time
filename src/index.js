import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Redirect from="/" to="/Home" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
