import React, { Component } from "react";
import * as SC from './Styled';
import GiantGamesLogo from './Images/GiantGamesLogo.png';
import Redheadimage from './Images/Redheadimage.png';
import Grant from './Images/Grant.png';
import Red from './Images/Red.png';
import Sybil from './Images/Sybil_2.png';
import TopRightFeather from './Images/Feather-topright.png';
import BottomRightFeather from './Images/Feather-bottomright.png';
import MidLeftFeather from './Images/Feather-midleft.png';
import ArrowUp from './Images/transparent-uparrow.png'
import ArrowLeft from './Images/left-arrow.png'
import ArrowRight from './Images/right-arrow.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!")
  }

  render() {
    const { name, email, message } = this.state;

    return (
    <>
       <SC.FirstContainer id="section1">
        <SC.Header>
          <SC.HeaderLogo src={GiantGamesLogo}/>
          SUPERGIANTGAMES
        </SC.Header>
  
        <SC.GameCardContainer>
          <SC.GameCardTitle>TRANSISTOR - RED THE SINGER</SC.GameCardTitle>
          <SC.GameImageCardImg src={Redheadimage} />
          <SC.GameCardText>"Olha, o que quer que você esteja pensando, me faça um favor, não solte."</SC.GameCardText>
          {/* <SC.FeatherContainer>
            <SC.TopRightFeather src={TopRightFeather}/>
            <SC.BottomRightFeather src={BottomRightFeather}/>
            <SC.MidLeftFeather src={MidLeftFeather}/>
          </SC.FeatherContainer> */}
        </SC.GameCardContainer>
      </SC.FirstContainer>
    </>
    );
  }

}

export default App;
