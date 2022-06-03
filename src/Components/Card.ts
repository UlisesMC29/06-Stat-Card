import styled from "styled-components";
// import ImgHeader from '../src/images/image-header-desktop.jpg'

export const Card = styled.div`
    width: 1110px;
    height: 446px;
    background-color: #1b1937;
    border-radius: 8px; 
    display: block;
    justify-content: center;

    @media (max-width: 800px){
        width: 327px;
        height: 780px;
        margin: 88px 24px;
    }

`;