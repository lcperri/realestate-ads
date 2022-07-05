import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
    }

    a {
        color: #fff;
        font-size: 15px;
        text-decoration: none;
    }

    /* Titulo */
    h1 {
        font-size: 19px;
        font-weight: 600;
        margin: 24px 0 16px 0;
    }
    /* SubTitulo */
    h2 {
        font-size: 17px;
        font-weight: 600;
    }
    /* Normal */
    h3 {
        font-size: 14px;
        font-weight: 500;
    }
    /* Small */
    h4 {
        font-size: 13px;
        font-weight: 400;
    }

    h5 {
        font-size: 12px;
        font-weight: 400;
    }
`
