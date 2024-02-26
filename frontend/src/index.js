import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';

import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_cmljaC1nbGlkZXItOTIuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

ReactDOM.render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
    </ClerkProvider>
    , document.getElementById("root"));