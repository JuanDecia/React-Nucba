import React from "react";
import styled from 'styled-components';

const Footer = () => {
    return (
        <ContenedorFooter>
            <div className="footer-card">
                <h4 className="footer-sub">Sobre Nosotros</h4>
                <div className="footer-parrafo">
                    <p>
                        Somos un club deportivo de la ciudad de Mar del Plata fundado el 20 de Junio de 1950. Estamos afiliados a la Liga Marplatense de Fútbol.
                    </p>
                </div>
            </div>

            {/* Contenedor Contacto */}
            <div className="footer-contacto">
                <h4 className="footer-sub">Contacto</h4>
                
                <div className="cont-contacto">
                    <div className="cont-logo">
                        {/* <svg className="ubicacion" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(136, 136, 136, 1);transform: msFilter"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg> */}
                    </div>
                    <div className="">
                        <p className="parrafo-footer">Rodriguez Peña 3865, Mar del Plata, Argentina</p>
                    </div>
                </div>

                <div className="cont-contacto">
                    <div className="cont-logo">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(136, 136, 136, 1);transform: msFilter"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg> */}
                    </div>
                    <div className="cont-info">
                        2233478347
                    </div>
                </div>

            </div>

            {/* Contenedor Sede */}
            <div className="footer-sede">
                <h4 className="footer-sub">Sede Social</h4>

                <div className="mapa-club">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100599.78836873974!2d-57.714925056640574!3d-38.0064456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584deb751a4711d%3A0xc014e90819f4a37e!2sClub%20Atletico%20Almagro%20Florida!5e0!3m2!1ses!2sar!4v1699131538298!5m2!1ses!2sar" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </ContenedorFooter>
    )
}

export default Footer;

const ContenedorFooter = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 100px;
    background-color: #111111;
    color: #888888;

    /* ######### FOOTER */

.footer-sub {
    font-size: 1.4em;
}

.parrafo-footer {
    text-align: center;
}

/* -- Contenedor Sobre Nosotros -- */
.footer-card {
    width: 50%;
    padding: 15px;
}

.footer-card h4 {
    text-align: center;
    margin-bottom: 40px;
}

/* -- Contenedor Contactanos -- */

.footer-contacto {
    width: 50%;
    padding: 15px;
}

.footer-contacto h4 {
    text-align: center;
}

.cont-contacto {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    gap: 10px;
}

.cont-info {
    display: flex;
    align-items: center;
    font-size: 1.2em;
}

.cont-social {
    display: flex;
    flex-wrap: wrap;
}

.cont-social h4 {
    width: 100%;
    margin-bottom: 20px;
}

.social-img {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.social-img svg {
    width: 40px;
}

/* Contenedor Sede */

.footer-sede {
    width: 50%;
    padding: 15px;
}

.footer-sede h4 {
    text-align: center;
    margin-bottom: 40px;
}

.mapa-club {
    display: flex;
    justify-content: center;
}

.mapa-club iframe {
    border: 0;
    max-width: 100%;
    border-radius: 10px;
    height: 160px;
}

/* MEDIA QUERIES */
@media (max-width: 778px) {
    flex-wrap: wrap;
    margin-top: 50px;
    border-radius: 5px;

    .footer-card, .footer-contacto, .footer-sede{
        width: 100%;
    }
}
`