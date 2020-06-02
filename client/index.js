import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
