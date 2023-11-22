import React from "react";
import menuImg from '../../assets/menu.png';
import styled from 'styled-components';

const MenuContainer = styled.div`

    display: flex;

    .cont-menu {
        display: flex;
        align-items: center;
        border: 1px solid white;
    }
`;

const MenuHeader = () => {

    return (
        <MenuContainer>
            <div className="cont-menu">
                <img className="menu-img" src={menuImg} alt="menu-img" />
            </div>
        </MenuContainer>
    )
};

export default MenuHeader;
