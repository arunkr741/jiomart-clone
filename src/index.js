import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import  {store } from './Redux/store'
import {ContextProvider} from "./Components"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
