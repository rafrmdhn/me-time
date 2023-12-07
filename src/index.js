import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/Home" />} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);