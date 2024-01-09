import React from 'react';
import logoImg from '../../../assets/juanLogo.png';
import { ImgContenedor } from './LogoContenedorStyles';

export const LogoContenedor = () => {
  return (
    <ImgContenedor>
        <img src={ logoImg } alt="logo-img" />
        <h1>Juan Decia Full Stack Jr</h1>
    </ImgContenedor>
  )
}

