import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import storage from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storage}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
