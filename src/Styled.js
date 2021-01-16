import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import FirstBackground from './Images/FirstBG@2.png';
import CardBackground from './Images/CardBackground.svg';
import Grant from './Images/Grant.png';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        top: 945px;
        height: 2505px;
        width: 1920px;
        background: transparent linear-gradient(143deg, #7DEDE2 0%, #58B790 100%) 0% 0% no-repeat padding-box;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 109px;
    background: #363636 0% 0% no-repeat padding-box;
    font: bold 23px/36px Montserrat;
    text-align: left;
    letter-spacing: 0.68px;
    color: #FFFFFF;
    text-transform: uppercase;
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 3;
`

export const HeaderLogo = styled.img`
    top: 0px;
    left: 749px;
    width: 109px;
    height: 109px;
    margin-left: -60px;
    padding-right: 30px;
`

export const FirstContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 10fr;
    background: transparent url(${FirstBackground}) 0% 0% no-repeat padding-box;
    opacity: 0.85;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
`

export const GameCardContainer = styled.div`
    background: transparent url(${CardBackground}) 0% 33% no-repeat padding-box;
    /* box-shadow: 0px 3px 6px #00000099; */
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-rows: 0.2fr 6fr 25%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    top: 0px;
    left: 667px;
    width: 586px;
    height: 1080px;
    justify-self: center;
    justify-items: center;
`

export const GameImageCardImg = styled.img`
    top: 163px;
    left: 700px;
    height: 754px;
    width: 526px;
    /* box-shadow: 0px 3px 6px #00000099; */
    border-radius: 196px;
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row: 2;
    padding-bottom: 8px;
`

// export const FeatherContainer = styled.div`
//     grid-row: 3;
//     position: absolute;
// `

// export const TopRightFeather = styled.img`
//     position: relative;
//     right: 30%;
// `

// export const BottomRightFeather = styled.img`
//     position: relative;
//     right: 60%;
// `

// export const MidLeftFeather = styled.img`
//     position: absolute;
//     left: -8.3%;
//     bottom: -93.7%;
//     height: 55%;
// `

export const GameCardTitle = styled.p`
    top: 121px;
    left: 697px;
    width: 240px;
    height: 20px;
    margin-left: 30px;
    text-align: center;
    font: normal normal bold 15px/18px Open Sans;
    letter-spacing: 0px;
    color: #FFFFFF;
    grid-column-start: 1;
    grid-column-end: 3;
`

export const GameCardText = styled.p`
    top: 945px;
    left: 825px;
    width: 271px;
    height: 121px;
    text-align: center;
    font: normal normal normal 20px/21px Open Sans;
    letter-spacing: 0px;
    color: #F0F0F2;
    /* text-shadow: 0px 3px 6px #00000029; */
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 3;
`

export const SecondContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background: #363636 0% 0% no-repeat padding-box;
    height: 1147px;
    width: 1920px;
    position: relative;
`

export const CharacterCardContainer = styled.div`
    background: #363636 0% 0% no-repeat padding-box;
    border: 3px solid #FFFFFF;
    border-radius: 86px;
    left: 10px;
    width: 364px;
    height: 440px;
    top: -92.2px;
    position: relative;
`

export const CharacterCardImage = styled.img`
    position: relative;
    width: 401.92px;
    height: 556.76px;
    bottom: 105px;
    left: -20px;
`

export const CharacterCardWhiteBox = styled.div`
    width: 387px;
    height: 613px;
    top: 299px;
    left: 9px;
    position: relative;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
    justify-self: right;
`

export const CharacterCardWhiteBox2 = styled.div`
    width: 387px;
    height: 613px;
    top: 299px;
    position: relative;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
    justify-self: center;
`

export const CharacterCardWhiteBox3 = styled.div`
    width: 387px;
    height: 613px;
    top: 299px;
    right: 9px;
    position: relative;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
    justify-self: left;
`

export const CharacterWhiteBoxText = styled.p`
    text-align: left;
    font: normal normal normal 20px/25px 'Open Sans';
    letter-spacing: 0px;
    color: #363636;
    position: relative;
    bottom: 81px;
    left: 36.5px;
    width: 326px;
    height: 153px;
`

// export const CharacterSwitchArrow = styled.button`
//     border-radius: 50%;
//     border-color: red;
//     height: 12%;
//     width: 60%;
//     justify-self: right;
//     align-self: center;
// `

// export const CharacterSwitchArrow2 = styled.button`
//     border-radius: 50%;
//     border-color: red;
//     height: 12%;
//     width: 60%;
//     justify-self: left;
//     align-self: center;
// `

export const ThirdContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 1920px;
    height: 742px;
    background: transparent linear-gradient(143deg, #7DEDE2 0%, #58B790 100%) 0% 0% no-repeat padding-box;
`

export const FormWhiteBox = styled.div`
    position: absolute;
    width: 1082px;
    height: 832px;
    background-color: white;
    border-radius: 5px;
    bottom: -45px;
`

export const FormWhiteBoxTitle = styled.p`
    position: relative;
    top: 82.83px;
    text-align: center;
    font: normal normal bold 22px/32px Montserrat;
    letter-spacing: -0.88px;
    color: #63C7A9;
    margin: 0;
`

export const FormWhiteBoxText = styled.p`
    position: relative;
    top: 123.85px;
    left: 193px;
    width: 746px;
    height: 77px;
    text-align: left;
    font: normal normal normal 20px/21px 'Open Sans';
    letter-spacing: 0px;
    color: #363636;
    margin: 0;
`

export const Footer = styled.footer`
    height: 410px;
    width: 1920px;
    background: #363636 0% 0% no-repeat padding-box;
`

// export const GoTopButton = styled.button`
//     border-radius: 50%;
//     border-color: red;
//     height: 20%;
//     width: 5%;
// `