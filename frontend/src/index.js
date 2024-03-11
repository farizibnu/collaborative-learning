import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';


import { GoogleOAuthProvider } from '@react-oauth/google';
import {VITE_GOOGLE_AUTH_KEY} from './lib/env'
// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_cmljaC1nbGlkZXItOTIuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }



  ReactDOM.render(
    <GoogleOAuthProvider 
    clientId={VITE_GOOGLE_AUTH_KEY}>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </GoogleOAuthProvider>,
    document.getElementById("root")
  );  
// ReactDOM.render(
//   <GoogleOAuthProvider clientId="222198382809-7730drrs9rpu1ghginqjj22j586og7a9.apps.googleusercontent.com">
//       <App />
//   </GoogleOAuthProvider>,
//   document.getElementById("root")
// );


  

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <GoogleOAuthProvider clientId="222198382809-7730drrs9rpu1ghginqjj22j586og7a9.apps.googleusercontent.com">
//     <App />
//   </GoogleOAuthProvider>
// );
