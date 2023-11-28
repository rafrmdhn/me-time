import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Redirect to="/Home" />
    </Switch>
  </Router>,
  document.getElementById('root')
);