import React from 'react'
import { ContainerStyled } from './MainContainerStyles'
import { Hero } from './hero/hero';
import Footer from './footer/Footer';

export const MainContainer = () => {
  return (
    <ContainerStyled>
        <Hero />
        <Footer />
    </ContainerStyled>
  )
}
