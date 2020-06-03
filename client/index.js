import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import App from './App';
import CreateForm from './containers/CreateForm';
import UpdateForm from './containers/UpdateForm';

reactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/newtrack" component={CreateForm} />
        <Route exact path="/update" component={UpdateForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
