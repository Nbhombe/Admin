import styled from "styled-components";
import Bg from "../../assets/images/form-bg-2.jpeg"
export const SignInStyled = styled.section`
    position: relative;
    background-image: url(${Bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    .container .row{
        height: 100vh;
        position: relative;
        
        justify-content:center;
             
    }
    .row> div:first-child{
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

`