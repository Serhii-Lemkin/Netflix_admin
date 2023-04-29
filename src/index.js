import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { AuthContextProvider } from './context/auth/AuthContext';

axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
