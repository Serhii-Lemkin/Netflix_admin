import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { AuthContextProvider } from './context/auth/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListContextProvider } from './context/listContext/ListContext';

axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
