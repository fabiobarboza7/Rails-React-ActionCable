import React, { useState } from 'react';
import { saveConversations } from '../../services/conversations.service';

const NewConversationForm = () => {
  const [conversation, setConversation] = useState({ title: '' });

  const handleChange = e => {
    setConversation({ title: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await saveConversations(conversation);
    setConversation({ title: '' });
  };

  return (
    <div className="newConversationForm">
      <form onSubmit={handleSubmit}>
        <label>New Conversation:</label>
        <br />
        <input type="text" value={conversation.title} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewConversationForm;
