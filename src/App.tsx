import React, { useEffect } from 'react';
import './App.scss'
import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar/navbar';
import { Footer } from './Components/Footer/footer';
import { Categories } from './Components/Categories/Categories';
import { Routes } from './routes';


const App: React.FC = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Categories />
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}
export { App }