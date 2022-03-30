import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import { Provider } from 'react-redux'
import store from "./redux/store/store"
import ThemeProvider from './components/context'


ReactDOM.render(
  <Provider store={store}>
      {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
    </Provider>,
  document.getElementById('root')
);


