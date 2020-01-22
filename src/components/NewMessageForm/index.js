import React, { useState, useEffect } from 'react';
import { saveMessages } from '../../services/messages.service';

const NewMessageForm = ({ conversation_id }) => {
  const [text, setText] = useState({
    text: '',
    conversation_id,
  });

  useEffect(() => {
    setText({ text: text.text, conversation_id });
  }, [conversation_id, text.text]);

  const handleChange = e => {
    setText({ text: e.target.value, conversation_id: text.conversation_id });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await saveMessages(text);

    setText({ text: '', conversation_id: text.conversation_id });
  };

  return (
    <div className="newMessageForm">
      <form onSubmit={handleSubmit}>
        <label>New Message:</label>
        <br />
        <input type="text" value={text.text} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewMessageForm;
