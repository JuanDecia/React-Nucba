import React from "react";
import ContenedorLogo from "./Logo";
import './Header.css';

const Header = () => {
    return (
        <header>

            {/* Contenedor Logo */}
            <ContenedorLogo />

            {/* Contenedor navbar */}
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Actividades</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;