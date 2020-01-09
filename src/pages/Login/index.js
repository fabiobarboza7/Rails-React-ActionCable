import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';
import { userLogin } from '../../services/sessions.service';
// import { Container } from './styles';

export default function Login() {
  const [userSessionData, setUserSessionData] = useState({});

  async function handleSubmit(data) {
    const response = await userLogin({ user: { ...data } });
    setUserSessionData(response);
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" />
      <Input name="password" />
      <button type="submit">login</button>
    </Form>
  );
}
