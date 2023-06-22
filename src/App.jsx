import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/global/Header';
import Footer from './Components/global/Footer';
import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
