import React, { useContext } from 'react';
import './LoginPage.css';
import { useState } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { loginCall } from '../../context/auth/AuthApiCalls';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form action="" className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="loginInput"
        />
        <button
          className="LoginButton"
          onClick={handleLogin}
          disabled={isFetching}
        > 
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
