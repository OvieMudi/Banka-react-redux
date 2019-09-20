import React, { Component } from 'react';
import LoginForm from '../../components/UI/SigninForm/LoginForm/LoginForm';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This is NOT the login page...</h1>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
