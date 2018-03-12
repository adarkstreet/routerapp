import React from 'react';
import { login } from '..fakeAuth.js';

const Login = ({history}) => (
  <div>
    <h3>Login</h3>
    <button onClick={ () => {
      login()
    }}>
      Login
      history.push('/dashboard')
    </button>
  </div>
)

export default Login;