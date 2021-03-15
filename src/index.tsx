import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducers from './redux/redusers'
import { Provider } from 'react-redux';

const store = createStore(
  rootReducers, window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);