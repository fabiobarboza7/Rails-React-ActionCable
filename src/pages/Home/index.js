import React from 'react';
import Registration from '../Registration';
import Login from '../Login';

// import { Container } from './styles';

export default function Home() {
  return (
    <div>
      Home
      <p>SignUp</p>
      <Registration />
      <p>SignIn</p>
      <Login />
    </div>
  );
}
