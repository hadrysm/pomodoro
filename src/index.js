import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Root from 'views/Root/Root';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
