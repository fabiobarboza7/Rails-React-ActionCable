import axios from './api';

export const getConversations = async () => {
  const data = await axios.get('/conversations');
  return data;
};

export const saveConversations = async conversation => {
  const data = await axios.post('/conversations', conversation);
  return data;
};
