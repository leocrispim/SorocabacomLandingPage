import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import FirstBackground from './Images/FirstBackground.png';
import CardBackground from './Images/CardBackground.svg';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    background: #363636 0% 0% no-repeat padding-box;
    font: bold 18px/24px Montserrat;
    letter-spacing: 0.68px;
    color: #FFFFFF;
    text-transform: uppercase;
`

export const HeaderLogo = styled.img`
    width: 5%;
    height: 5%;
    margin-right: 3%;
`

export const FirstContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: transparent;
    background-image: url(${FirstBackground});
    background-size: cover;
    opacity: 0.85;
    height: 100vh;
`

export const GameCardContainer = styled.div`
    background-image: url(${CardBackground});
    background-size: fill;
    background-repeat: no-repeat;
    grid-column: 2;
    display: grid;
    grid-template-rows: 1fr 6fr 2fr;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 1%;
    margin-top: -1.45%;
    justify-items: center;
`

export const GameImageCardImg = styled.img`
    margin-left: 2.3%;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 2;
    align-self: center;
    height: 80%;
    width: auto;
`

export const GameCardTitle = styled.p`
    text-align: center;
    font: normal normal bold 10px/12px Open Sans;
    color: #FFFFFF;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: -33%;
`

export const GameCardText = styled.p`
    text-align: center;
    font: normal normal normal 14px/16px Open Sans;
    letter-spacing: 0px;
    color: #F0F0F2;
    text-shadow: 0px 3px 6px #00000029;
    grid-column: 2;
    grid-row: 3;
`

export const SecondContainer = styled.div`
    height: 660px;
    background: #363636 0% 0% no-repeat padding-box;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5%;
    position: relative;
    padding-bottom: 10%;
`

export const CharacterCardContainer = styled.div`
    background-color: grey;
    border-radius: 80px;
`

export const CharacterCardImage = styled.img`
    position: absolute;
    height: 50%;
    bottom: 45%;
`

export const CharacterSwitchArrow = styled.button`
    border-radius: 50%;
    border-color: red;
    height: 12%;
    width: 60%;
    align-self: center;
`

export const ThirdContainer = styled.div`
    position: relative;
    height: 400px;
    background: transparent linear-gradient(143deg, #7DEDE2 0%, #58B790 100%) 0% 0% no-repeat padding-box;
`

export const FormWhiteBox = styled.div`
    position: absolute;
    height: 130%;
    width: 50%;
    background-color: white;
    top: -16%;
    left: 25%;
    border-radius: 10px;
`

export const Footer = styled.footer`
    height: 300px;
    background: #363636 0% 0% no-repeat padding-box;
`

export const GoTopButton = styled.button`
    border-radius: 50%;
    border-color: red;
    height: 20%;
    width: 5%;
`