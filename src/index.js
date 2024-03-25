import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store';
// import reportWebVitals from './reportWebVitals';
import { Authprovider } from './store/auth';
// import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const primary_color = "rgb(82, 79, 64)";
export const secondary_color = "rgb(82, 79, 64)";

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Authprovider>
              <App />
          </Authprovider>
      </Provider>
    </React.StrictMode>
);

// reportWebVitals();
