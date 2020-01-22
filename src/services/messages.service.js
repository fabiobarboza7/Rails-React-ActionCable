import axios from './api';

export const getMessages = async () => {
  const data = await axios.get('/conversations');
  return data;
};

export const saveMessages = async message => {
  const data = await axios.post('/messages', message);
  return data;
};
