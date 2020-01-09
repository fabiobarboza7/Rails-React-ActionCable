import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import schema from './schema';
import { userRegistration } from '../../services/registrations.service';
// import { Container } from './styles';

export default function Registration() {
  const [userData, setUserData] = useState({});

  async function handleSubmit(data) {
    const { user } = await userRegistration({ user: { ...data } });
    setUserData(user);
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" />
      <Input name="password" />
      <button type="submit">send</button>
    </Form>
  );
}
