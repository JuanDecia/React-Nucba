import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid white;

    .img-logo {
        display: flex;
        width: 150px;
    }
`

// Contenedor Links General
export const LinksContainerStyled = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid red;

    @media (max-width: 768px) {
        display: none;
    };
`

// Contenedor Link Individual
export const LinkContainerStyled = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
    align-items: center;
    border: 1px solid green;

    a {
        color: white;
        display: flex;
        align-items: center;
        gap: 15px;
    }

`;

// Contenedor Home
export const HomeContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    text-align: center;
`;

// Contenedor About
export const AboutContainerStyled = styled(LinkContainerStyled)`
`;

// Contenedor Products
export const ProductsContainerStyled = styled(LinkContainerStyled)`
`;

// Contenedor Contacto
export const ContactContainerStyled = styled(LinkContainerStyled)`
`;

// Contenedor Menu
export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
    }
`
