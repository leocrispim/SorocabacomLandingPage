import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import FirstBackground from './Images/FirstBG@2.png';
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
    height: 20%;
    background: #363636 0% 0% no-repeat padding-box;
    font: bold 18px/24px Montserrat;
    letter-spacing: 0.68px;
    color: #FFFFFF;
    text-transform: uppercase;
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 4;
`

export const HeaderLogo = styled.img`
    width: 5%;
    height: 100%;
    margin-right: 3%;
`

export const FirstContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 1fr 10fr;
    background: transparent;
    background-image: url(${FirstBackground});
    background-size: cover;
    opacity: 0.85;
    height: 125vh;
`

export const GameCardContainer = styled.div`
    background-image: url(${CardBackground});
    background-size: fill;
    background-repeat: no-repeat;
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-rows: 1fr 6fr 2fr;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 1%;
    margin-top: -71.5%;
    margin-left: 3.8%;
    width: 93%;
    justify-items: center;
`

export const GameImageCardImg = styled.img`
    margin-left: 2.3%;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 2;
    align-self: center;
    height: 78%;
    width: auto;
    /* top: 6%; */
    position: relative;
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
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 5vw;
    background: #363636 0% 0% no-repeat padding-box;
    height: 100vh;
    position: relative;
    padding-bottom: 10%;
`

export const CharacterCardContainer = styled.div`
    background-color: #363636;
    border-radius: 50px;
    border: solid white 2px;
    height: 71.3%;
    width: 92%;
    margin-top: -24%;
    margin-left: 3.4%;
`

export const CharacterCardImage = styled.img`
    position: absolute;
    height: 90%;
    bottom: 42%;
    left: -1.9%;
`

export const CharacterCardWhiteBox = styled.div`
    background-color: white;
    border-radius: 20px;
    height: 72.5%;
    width: 106%;
    margin-top: 65%;
    position: relative;
`

export const CharacterWhiteBoxText = styled.p`
    text-align: left;
    font: normal normal normal 15px/16px Open Sans;
    letter-spacing: 0px;
    color: #363636;
    padding: 2% 11.5% 0 11.5%;
`

export const CharacterSwitchArrow = styled.button`
    border-radius: 50%;
    border-color: red;
    height: 12%;
    width: 60%;
    justify-self: right;
    align-self: center;
`

export const CharacterSwitchArrow2 = styled.button`
    border-radius: 50%;
    border-color: red;
    height: 12%;
    width: 60%;
    justify-self: left;
    align-self: center;
`

export const ThirdContainer = styled.div`
    position: relative;
    height: 400px;
    background: transparent linear-gradient(143deg, #7DEDE2 0%, #58B790 100%) 0% 0% no-repeat padding-box;
`

export const FormWhiteBox = styled.div`
    position: absolute;
    height: 112%;
    width: 42%;
    background-color: white;
    top: -16%;
    left: 20.5%;
    border-radius: 6px;
    padding: 3% 8% 3% 8%;
`

export const FormWhiteBoxTitle = styled.p`
    text-align: center;
    font: normal normal bold 22px/32px Montserrat;
    letter-spacing: -0.88px;
    color: #63C7A9;
`

export const FormWhiteBoxText = styled.p`
    text-align: left;
    font: normal normal normal 16px/18px Open Sans;
    letter-spacing: 0px;
    color: #363636;
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