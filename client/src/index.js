import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux'
import store from './redux/store'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 


