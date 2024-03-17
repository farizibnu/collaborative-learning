import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";

import { GoogleOAuthProvider } from '@react-oauth/google';
import {VITE_GOOGLE_AUTH_KEY} from './lib/env'


  ReactDOM.render(
    <GoogleOAuthProvider 
    clientId={VITE_GOOGLE_AUTH_KEY}>
    <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>,
    document.getElementById("root")
  );  

