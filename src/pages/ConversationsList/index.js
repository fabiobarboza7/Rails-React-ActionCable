import React, { useState, useEffect } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

// helpers

const findActive = (conversations, active) => {
  return conversations.find(conversation => conversation.id === active);
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    );
  });
};

export default function ConversationsList() {
  const [conversations, setConversations] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(convers => setConversations({ convers }));
  }, []);

  const handleClick = id => {
    setActive(id);
  };

  const handleReceivedConversation = response => {
    const { conversation } = response;

    setConversations([...conversations, conversation]);
  };

  const handleReceivedMessage = response => {
    const { message } = response;
    const conversationsArray = [...conversations];
    const conversation = conversationsArray.find(
      convers => convers.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    setConversations({ conversations });
  };

  return (
    <div className="conversationsList">
      <ActionCable
        channel={{ channel: 'ConversationsChannel' }}
        onReceived={handleReceivedConversation}
      />
      {conversations.length ? (
        <Cable
          conversations={conversations}
          handleReceivedMessage={handleReceivedMessage}
        />
      ) : null}
      <h2>Conversations</h2>
      <ul>{mapConversations(conversations, handleClick)}</ul>
      <NewConversationForm />
      {active ? (
        <MessagesArea conversation={findActive(conversations, active)} />
      ) : null}
    </div>
  );
}
