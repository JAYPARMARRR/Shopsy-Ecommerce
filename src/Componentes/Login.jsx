import React, { useState } from 'react';
import "./Login.css"
import LoginImg from "./img/output.gif"





const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Email = (e) => {
    setEmail(e.target.value);
  };

  const Password = (e) => {
    setPassword(e.target.value);
  };

  const Submit = (e) => {   
    e.preventDefault();

    console.log('Email', email);
    console.log('Password', password);
  };

  return (
    <>
<div id='main-log-in-page-box'>
  <div>
    <img src={LoginImg} alt="not" id='login-page-img' />
  </div>
    <div className="login-container">
      <form className="login-form" >
        <h1 id='logIn-lebal'>Log In</h1>
        <div className="form-group">
          <label htmlFor="email">Email😄</label>
          <input type="email" id="email" value={email} onChange={Email} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password🙈</label>
          <input type="password" id="password" value={password} onChange={Password} required />
        </div>
        <button type="submit" id='button-login'onClick={Submit}> <p>Submit</p></button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
