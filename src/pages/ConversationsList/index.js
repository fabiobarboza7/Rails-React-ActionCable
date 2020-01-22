import React, { useState, useEffect } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import NewConversationForm from '../../components/NewConversationForm';
import MessagesArea from '../../components/MessagesArea';
import Cable from '../../components/Cables';
import { getConversations } from '../../services/conversations.service';

// helpers

const findActive = (conversations, active) => {
  return conversations.find(conversation => conversation.id === active);
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <button
        type="button"
        key={conversation.id}
        onClick={() => handleClick(conversation.id)}
      >
        {conversation.title}
      </button>
    );
  });
};

export default function ConversationsList() {
  const [conversations, setConversations] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    async function getConversationService() {
      const { data } = await getConversations();
      setConversations([...data]);
    }

    getConversationService();
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
    setConversations([...conversations]);
  };

  return (
    <div className="conversationsList">
      <ActionCableConsumer
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
