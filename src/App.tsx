import React, { useEffect } from 'react';
import './App.scss'
import { Header } from './Components/header/Header'
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { Categories } from './Components/categories/Categories';
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