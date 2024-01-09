import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
        background-repeat: no-repeat;
        border: 1px solid black;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        color: white;
    }

    a {
        text-decoration: none;
    }

    p {
        text-align: justify;
    }
`;