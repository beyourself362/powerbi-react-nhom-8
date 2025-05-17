import React from 'react';
import { createRoot } from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import App from './App';
import { msalConfig } from './authConfig';
import './index.css';

// Khởi tạo MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// Thiết lập root mới cho React 18+
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>
);