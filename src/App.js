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
          <SC.FeatherContainer>
            <SC.TopRightFeather src={TopRightFeather}/>
            <SC.BottomRightFeather src={BottomRightFeather}/>
            <SC.MidLeftFeather src={MidLeftFeather}/>
          </SC.FeatherContainer>
        </SC.GameCardContainer>
      </SC.FirstContainer>

      <Carousel showArrows={true} renderIndicator={false}>
        <div>
          <img src={Grant}/>
          <p className="Legend">Qualquer coisa</p>
        </div>

        <div>
          <img src={Red}/>
          <p className="Legend">Algo ai</p>
        </div>

        <div>
          <img src={Sybil}/>
          <p className="Legend">Hue hue</p>
        </div>
      </Carousel>
  
      {/* <SC.SecondContainer>
        <SC.CharacterSwitchArrow>
          <SC.SwitchArrowIcon src={ArrowLeft}/>
        </SC.CharacterSwitchArrow>
  
        <SC.CharacterCardWhiteBox>
          <SC.CharacterCardContainer>
            <SC.CharacterCardImage src={Grant} />
          </SC.CharacterCardContainer>
          <SC.CharacterWhiteBoxText>A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.</SC.CharacterWhiteBoxText>
        </SC.CharacterCardWhiteBox>
  
        <SC.CharacterCardWhiteBox2>
          <SC.CharacterCardContainer>
          <SC.CharacterCardImage src={Red} />
          </SC.CharacterCardContainer>
          <SC.CharacterWhiteBoxText>Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O Grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.</SC.CharacterWhiteBoxText>
        </SC.CharacterCardWhiteBox2>
  
        <SC.CharacterCardWhiteBox3>
          <SC.CharacterCardContainer>
          <SC.CharacterCardImage src={Sybil} />
          </SC.CharacterCardContainer>
          <SC.CharacterWhiteBoxText>Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.</SC.CharacterWhiteBoxText>
        </SC.CharacterCardWhiteBox3>
  
        <SC.CharacterSwitchArrow2>
          <SC.SwitchArrowIcon src={ArrowRight}/>
        </SC.CharacterSwitchArrow2>
      </SC.SecondContainer> */}
  
      <SC.ThirdContainer>
        <SC.FormWhiteBox>
          <SC.FormWhiteBoxTitle>FORMULÁRIO</SC.FormWhiteBoxTitle>
          <SC.FormWhiteBoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</SC.FormWhiteBoxText>
  
          <SC.FormWrapper onSubmit={this.handleSubmit}>
            <SC.SmallInput type="text" placeholder="Nome" name="name" value={name} onChange={this.handleFieldChange} required></SC.SmallInput>
            <SC.SmallInput2 type="email"
              pattern="/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g"
              title="Favor inserir um e-mail valido."
              placeholder="Email" name="email" value={email} onChange={this.handleFieldChange} required>
            </SC.SmallInput2>
            <SC.LargeInput type="text" placeholder="Mensagem" name="message" value={message} onChange={this.handleFieldChange} required></SC.LargeInput>
            <SC.SendButton type="submit">ENVIAR</SC.SendButton>
          </SC.FormWrapper>
        </SC.FormWhiteBox>
      </SC.ThirdContainer>
  
      <SC.Footer>
        <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <SC.GoTopButton>
            <SC.GoTopIcon src={ArrowUp}/>
          </SC.GoTopButton>
        </Link>
      </SC.Footer>
    </>
    );
  }

}

export default App;
