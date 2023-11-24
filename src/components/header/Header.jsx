import React from "react";
import { AboutContainerStyled, ContactContainerStyled, HeaderContainerStyled, HomeContainerStyled, LinksContainerStyled, ProductsContainerStyled } from "./HeaderStyles";
import imgLogo from '../../assets/logo-juan.png';

// Icons
import { HiOutlineHome } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { SiBookstack } from 'react-icons/si';
import { IoMailOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <HeaderContainerStyled>
            <div>
                <a href="/#">
                    <img className="img-logo" src={imgLogo} alt="logo-juan" />
                </a>
            </div>

            <LinksContainerStyled>
                <HomeContainerStyled>
                    <a href="#">
                        <HiOutlineHome />
                        Home
                    </a>
                </HomeContainerStyled>

                <AboutContainerStyled>
                    <a href="#">
                        <IoPersonOutline />
                        About Me
                    </a>
                </AboutContainerStyled>

                <ProductsContainerStyled>
                    <a href="#">
                        <SiBookstack />
                        Productos
                    </a>
                </ProductsContainerStyled>

                <ContactContainerStyled>
                    <a href="#">
                        <IoMailOutline />
                        Contacto
                    </a>
                </ContactContainerStyled>

            </LinksContainerStyled>
        </HeaderContainerStyled>
    );
};

export default Header;