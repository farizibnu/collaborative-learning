import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';
import {VITE_GOOGLE_AUTH_KEY} from './lib/env'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={VITE_GOOGLE_AUTH_KEY}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);