import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' in React 18
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

// Create a root element using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app with the root.createRoot() method
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
