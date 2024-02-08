// globalStyles.js
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) => props.theme.brandColor.bgColor};
        overflow: hidden;
    }
    a {
        text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    h1 {
        font-size: ${(props) => props.theme.fontSize.font34};
        font-weight: bold;
    }
    h2 {
        font-size: ${(props) => props.theme.fontSize.font30};
        font-weight: bold;
    }
    h3 {
        font-size: ${(props) => props.theme.fontSize.font24};
        font-weight: bold;
    }
    h4 {
        font-size: ${(props) => props.theme.fontSize.medium};
        font-weight: bold;
    }
    h5 {
        font-size: ${(props) => props.theme.fontSize.medium};
        font-weight: bold;
    }
    h6 {
        font-size: ${(props) => props.theme.fontSize.small};
        font-weight: bold;
    }
    p {
        font-size: ${(props) => props.theme.fontSize.font22};
        font-weight: regular;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.brandColor.lighter}; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.brandColor.primary}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.brandColor.primary}; 
    }
    .theme {
        // display: none;
        position: absolute;
        top: 50%;
        right: 0;
        background-color: ${(props) => props.theme.brandColor.lighter};
        padding: 10px;
        border-radius: 10px 0 0 10px;
        z-index:1111;
    }
`;

export default GlobalStyle;
