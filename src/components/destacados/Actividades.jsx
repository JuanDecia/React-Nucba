import React from "react";
import styled from 'styled-components';

const Actividades = () => {
    return (
        <ContenedorActividades>
            <div className="cont-titulo">
                <h2>Actividades Deportivas y Sociales</h2>
            </div>

            <div className="contenedor-descripcion">
                <div className="card">
                    <div className="card-descripcion">
                        <h4>Desarrollo Integral</h4>

                        <p>
                            Nuestro club de fútbol se dedica a mucho más que solo ganar partidos. Te ofrecemos un entorno de desarrollo integral donde los jugadores aprenden habilidades en el campo y valores fuera de él, construyendo carácter y liderazgo que trascienden el deporte.  
                        </p>
                    </div>

                    <img src="../../src/assets/desarrollo-integral.jpg" alt="desarrollo-integral" />
                </div>
                <div className="card">
                    <div className="card-descripcion">
                        <h4>Comunidad Apasionada</h4>

                        <p>
                            La comunidad deportiva es un espacio donde apasionados del deporte se reúnen para compartir su amor y entusiasmo por la actividad física. Es un lugar donde la camaradería, el trabajo en equipo y la superación personal son los pilares fundamentales.
                        </p>
                    </div>

                    <img src="../../src/assets/comunidad deportiva.jpg" alt="" />
                </div>
                <div className="card">
                    <div className="card-descripcion">
                        <h4>Acceso Exclusivo</h4>

                        <p>
                            Los miembros disfrutan de ventajas exclusivas, como descuentos en entradas, acceso anticipado a noticias y contenido detrás de cámaras. Conviértete en parte de nuestra familia y obtén privilegios especiales que te acercarán más que nunca a la acción en el campo.
                        </p>
                    </div>

                    <img src="../../src/assets/socio.png" alt="" />
                </div>
            </div>
        </ContenedorActividades>
    )
}

export default Actividades;

const ContenedorActividades = styled.div `

    /* Estilos Generales Contenedor */
    h2 {
        margin: 40px 0;
    }

    .cont-titulo {
        display: flex;
        justify-content: center;
        margin: 30px 0;
        font-size: 1.3em;
    }

    /* Contenedor Descripcion */
    .contenedor-descripcion {
        display: flex;
        justify-content: space-around;
    }
    
    .contenedor-descripcion > :nth-child(2) {
        background-color: rgb(251, 255, 0);
        color: #0d0d41;
        font-weight: 500;
    }
    
    .card {
        padding: 20px;
        width: 33.33%;
    }

    .card-descripcion {
        height: 180px;
    }

    .card h4 {
        text-align: center;
        font-size: 1.3em;
        margin-bottom: 20px;
    }

    img {
        margin-top: 30px;
        max-width: 100%;
        width: 337.44px;
        height: 200px;
    }

    /* Media Queries */
    @media (max-width: 992px) {

        .card-descripcion {
            height: 300px;
        }

        .card-descripcion h4 {
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 778px) {

        .cont-titulo {
            margin: auto;
        }

        h2 {
            margin: 20px 0;
            text-align: center;
        }

        .contenedor-descripcion {
            flex-wrap: wrap;
        }

        .card {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }

        .card-descripcion {
            height: auto;
            padding: 10px;
        }

        .card-descripcion h4 {
            height: auto;
        }

        img {
            width: 100%;
            height: 246px;
        }
    }
`
