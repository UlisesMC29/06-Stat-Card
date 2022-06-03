import styled from "styled-components";
import ImgHeader from '../images/image-header-desktop.jpg'


export const Img = styled.img`

    position: absolute;
    width: 500px;
    height: 446px;
    background: #AB5CDB;
    opacity: 0.75;
    mix-blend-mode: multiply;
    background-image: url(${ImgHeader});

    /* @media screen and(max-width: 725px){
        width: 327px;
        height: 240px;
    } */
    
`;
