import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import FirstBackground from './Images/FirstBG.png';
import CardBackground from './Images/CardBackground.svg';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const FirstContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 1080px;
    width: 100vw;
    background: transparent url(${FirstBackground}) 0% 0% no-repeat padding-box;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #363636;
    position: relative;
    width: 100vw;
    height: 109px;
    font: bold 23px/36px 'Montserrat';
    text-align: left;
    letter-spacing: 0.68px;
    color: #FFFFFF;
    text-transform: uppercase;
`

export const HeaderLogo = styled.img`
    width: 109px;
    height: 109px;
`

export const GameCardContainer = styled.div`
    background: transparent url(${CardBackground}) 0% 33% no-repeat padding-box;
    width: 586px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const GameImageCardImg = styled.img`
    position: relative;
    left: 6px;
    height: 769px;
    width: 536px;
    border-radius: 196px;
    padding-bottom: 8px;
`

export const FeatherContainer = styled.div`
    grid-row: 3;
    position: absolute;
`

export const TopRightFeather = styled.img`
    position: absolute;
    bottom: 525px;
    left: 210px;
    width: 199.1px;
    height: 170.5px;
`

export const BottomRightFeather = styled.img`
    position: relative;
    width: 172.7px;
    height: 170.5px;
    left: 296px;
    bottom: 356px;
`

export const MidLeftFeather = styled.img`
    position: absolute;
    width: 143px;
    height: 132px;
    bottom: 497px;
    left: -249px;
`

export const GameCardTitle = styled.p`
    position: relative;
    left: -25%;
    width: 240px;
    height: 20px;
    margin-left: 30px;
    font: normal normal bold 15px/18px 'Open Sans';
    color: #FFFFFF;
`

export const GameCardText = styled.p`
    top: 945px;
    left: 825px;
    width: 271px;
    height: 121px;
    text-align: center;
    font: normal normal normal 20px/21px 'Open Sans';
    letter-spacing: 0px;
    color: #F0F0F2;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row: 3;
`

export const CarouselDiv = styled.div`
    height: 1147px;
    width: 1920px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #363636 0% 0% no-repeat padding-box;
`

export const SlideDiv = styled.div`
    background: #363636 0% 0% no-repeat padding-box;
    
`

export const CharacterCardContainer = styled.div`
    background: #363636 0% 0% no-repeat padding-box;
    border: 3px solid #FFFFFF;
    border-radius: 86px;
    left: 10px;
    top: -92.2px;
    width: 364px;
    height: 440px;
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
    /* top: 299px;
    left: 9px; */
    /* position: relative; */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
`

export const CharacterCardWhiteBox2 = styled.div`
    width: 387px;
    height: 613px;
    /* top: 299px; */
    position: relative;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
    /* justify-self: center; */
`

export const CharacterCardWhiteBox3 = styled.div`
    width: 387px;
    height: 613px;
    /* top: 299px;
    right: 9px; */
    position: relative;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
    /* justify-self: left; */
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

export const CharacterSwitchArrow = styled.button`
    position: relative;
    left:142px;
    bottom: 641.2px;
    width: 40px;
    height: 32px;
    grid-row: 2;
    outline: none;
    background: #363636 0% 0% no-repeat padding-box;
    border: none;
`

export const SwitchArrowIcon = styled.img`
    background: #363636 0% 0% no-repeat padding-box;
    width: 51px;
    height: 63px;
`

export const CharacterSwitchArrow2 = styled.button`
    position: relative;
    left: 1090px;
    bottom: 641.2px;
    width: 40px;
    height: 32px;
    grid-row: 2;
    outline: none;
    background: #363636 0% 0% no-repeat padding-box;
    border: none;
`

export const SwitchArrowIcon2 = styled.img`
    background: #363636 0% 0% no-repeat padding-box;
    width: 51px;
    height: 63px;
`

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

export const FormWrapper = styled.form`
    position: relative;
    top: 150px;
    width: 528px;
    height: 400px;
    left: 277.44px;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    grid-column-gap: 21.64px;
    grid-row-gap: 39.79px;
`

export const SmallInput = styled.input`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    width: 249px;
    height: 48px;
    text-indent: 10px;
    font: normal normal normal 18px/30px 'Open Sans';
`

export const SmallInput2 = styled.input`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    width: 249px;
    height: 48px;
    text-indent: 10px;
    font: normal normal normal 18px/30px 'Open Sans';
`

export const LargeInput = styled.textarea`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    width: 528px;
    height: 197px;
    text-indent: 10px;
    padding-top: 14.25px;
    text-align: left;
    font: normal normal normal 18px/30px 'Open Sans';
    resize: none;
`

export const SendButton = styled.button`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    width: 249px;
    height: 48px;
    margin-right: 7px;
    border: none;
    background: #63C7A9 0% 0% no-repeat padding-box;
    font: normal normal normal 18px/30px 'Open Sans';
    color: #FFFFFF;
`

export const Footer = styled.footer`
    height: 410px;
    width: 1920px;
    background: #363636 0% 0% no-repeat padding-box;
`

export const GoTopButton = styled.button`
    position: relative;
    width: 107px;
    height: 107px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 50%;
    left: 1670px;
    top: 98px;
    outline: none;
`

export const GoTopIcon = styled.img`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    width: 41px;
    height: 50px;
    border-radius: 20%;
`