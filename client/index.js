import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

import App from './components/App';
import CreateForm from './components/CreateForm';
import UpdateForm from './containers/UpdateForm';

reactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/newtrack" component={CreateForm} />
        <Route path="/track/update" component={UpdateForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
