import React from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/global/Header'
import Footer from './Components/global/Footer'
import Rotas from './routes'
import {UserStorage} from './UserContext'

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className='flex-1'>
          <Rotas/>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App
