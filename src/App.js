import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
