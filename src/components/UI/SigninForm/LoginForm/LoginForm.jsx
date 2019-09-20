import React from 'react';
import Input from '../../Input/Input';

const LoginForm = () => (
  <form>
    <h1>Sign In</h1>
    <span>continue with your email</span>
    <Input
      id="email-input"
      type="email"
      name="email"
      label="Email"
      className="validate"
      required
    />
    <Input
      id="password_input"
      type="password"
      name="password"
      label="Password"
      className="validate"
      required
    />
  </form>
);

export default LoginForm;
