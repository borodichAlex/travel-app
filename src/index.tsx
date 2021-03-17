import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers';
import { Provider } from 'react-redux';
import LangState from './contexts/lang-context';

const store = createStore(
  rootReducer, window && (window as any));


ReactDOM.render(
  <Provider store={store}>
    <LangState>
      <App />
    </LangState>
  </Provider>,
  document.getElementById('root')
);