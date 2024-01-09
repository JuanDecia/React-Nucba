import React from 'react';
import styled from 'styled-components';


export const Hero = () => {
  return (
    <HeroContainer>
        <article className='cont-hero-title'>
            <div className='cont-title'>
                <h1>Websites Done Right.</h1>
            </div>
            <div className='cont-title-description'>
                <h2>Hola y bienvenidos a mi portfolio digital!</h2>

                <p>
                    Soy Juan Decia, entusiasta tecnológico en busca de mi primera experiencia profesional. Aquí encontrarás una muestra de mi creatividad y dedicación en proyectos que reflejan mi pasión por el desarrollo web. Estoy emocionado por la oportunidad de contribuir con mi entusiasmo y habilidades a un equipo dinámico. ¡Vamos a conectar y explorar cómo puedo aportar a tu proyecto!
                </p>
            </div>
        </article>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
    display: flex;
    margin: 20px 0;
    width: 100%;

    /* --- TITULO --- */

    /* Sección h1 */
    & .cont-hero-title {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    & .cont-title {
        margin-bottom: 50px;
        width: 100%;
    }

    & h1 {
        font-size: 3rem;
    }

    /* Sección descripción */
    & .cont-title-description {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    & .cont-title-description p {
        line-height: 1.5rem;
    }

    /* --- CONTENEDOR IMAGEN --- */
    & .hero-img {
        width: 100%;
        height: 100%;
        border: 1px solid white;
    }
`