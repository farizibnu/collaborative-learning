import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';

import { ClerkProvider } from '@clerk/clerk-react'

// import { GoogleOAuthProvider } from '@react-oauthgoogle';

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_cmljaC1nbGlkZXItOTIuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

ReactDOM.render(
  <ClerkProvider  publishableKey={PUBLISHABLE_KEY}>
      <App />
  </ClerkProvider >,
  document.getElementById("root")
);


  

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <GoogleOAuthProvider clientId="222198382809-7730drrs9rpu1ghginqjj22j586og7a9.apps.googleusercontent.com">
//     <App />
//   </GoogleOAuthProvider>
// );