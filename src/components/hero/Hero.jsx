import React from "react";
import styled from 'styled-components';

const Hero = () => {
    return (
        <ContenedorHero>
            <div className="contenedor-titulo">
                <h1>Club Atlético Almagro Florida</h1>
                <h2>Más que un club, una familia.</h2>
            </div>
            
            <div className="cont-foto-equipo">
                <img className="foto-equipo" src="../src/assets/equipo-almagro-2.jpg" alt="equipo almagro" />
            </div>

        </ContenedorHero>
    )
}

export default Hero

const ContenedorHero = styled.div`

    /* Estilos Generales Contenedor */
    display: flex;
    margin: 50px 0;

    /* Animación título */
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slide-down {
        from {
            transform: translateY(-70px);
        }
        to {
            transform: translateY(0);
        }
    }

    /* Contenedor Título */
    .contenedor-titulo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 50%;
        font-size: 1.3em;
    }

    h1 {
        width: 100%;
        text-align: center;
        animation: slide-down 1.3s ease-in, fade 1.3s ease-in;
    }

    h2 {
        text-align: center;
    }

    /* Contenedor img */
    .cont-foto-equipo {
        display: flex;
        justify-content: center;
        padding: 10px;
        width: 50%;
    }
    .foto-equipo {
        max-width: 95%;
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 778px) {

        /* Estilos Generales */
        flex-wrap: wrap;
        margin: 0;

        .contenedor-titulo {
            width: 100%;
        }

        .contenedor-titulo h1 {
            margin-bottom: 30px;
        }

        .cont-foto-equipo {
            margin-top: 40px;
            width: 100%;
        }
    }
`