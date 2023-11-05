import React from "react";
import styled from 'styled-components';
import imagen from '../../assets/logo-almagro-removebg-preview.png'

const ContenedorLogo = () => {
    return (
        <div>
            <LogoContainer className="logo-img" src={imagen} alt="logo-almagro" />
        </div>

    )
}

export default ContenedorLogo

const LogoContainer = styled.img`
        max-width: 100px;

        @media (max-width: 778px) {
            display: none;
        }

        @media (max-width: 576px) {
            display: flex;
        }
`