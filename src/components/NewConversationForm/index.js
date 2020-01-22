import React, { useState } from 'react';
import { API_URL, HEADERS } from '../../config/api';

const NewConversationForm = () => {
  const [title, setTitle] = useState({ title: '' });

  const handleChange = e => {
    setTitle({ title: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${API_URL}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(title),
    });
    setTitle({ title: '' });
  };

  return (
    <div className="newConversationForm">
      <form onSubmit={handleSubmit}>
        <label>New Conversation:</label>
        <br />
        <input type="text" value={title} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewConversationForm;
