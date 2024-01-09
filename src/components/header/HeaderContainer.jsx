import React from 'react'
import { HeaderStyles } from './HeaderStyles'
import { LogoContenedor } from './logo/LogoContenedor'
import { NavContainer } from './navbar/Nav'


export const Header = () => {
  return (
    <HeaderStyles>
      <LogoContenedor />
      <NavContainer />
    </HeaderStyles>
  )
}
