import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Actividades from './components/destacados/Actividades';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Actividades />
      <Footer />
    </>
  )
}

export default App
