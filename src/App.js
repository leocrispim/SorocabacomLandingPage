import * as SC from './Styled';
import GiantGamesLogo from './Images/GiantGamesLogo.png';
import Redheadimage from './Images/Redheadimage.png';
import Grant from './Images/Grant.png';
import Red from './Images/Red.png';
import Sybil from './Images/Sybil_2.png';

function App() {
  return (
  <>
     <SC.FirstContainer>

     <SC.Header>
      <SC.HeaderLogo src={GiantGamesLogo}/>
      SUPERGIANT GAMES
    </SC.Header>

      <SC.GameCardContainer>

        <SC.GameCardTitle>TRANSISTOR - RED THE SINGER</SC.GameCardTitle>
        <SC.GameImageCardImg src={Redheadimage} />
        <SC.GameCardText>"Olha, o que quer que você <br/> esteja pensando, me faça <br /> um favor, não solte."</SC.GameCardText>

      </SC.GameCardContainer>

    </SC.FirstContainer>

    <SC.SecondContainer>
      <SC.CharacterSwitchArrow />

      <SC.CharacterCardWhiteBox>
        <SC.CharacterCardContainer>
          <SC.CharacterCardImage src={Grant}/>
        </SC.CharacterCardContainer>
        <SC.CharacterWhiteBoxText>A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.</SC.CharacterWhiteBoxText>
      </SC.CharacterCardWhiteBox>

      <SC.CharacterCardWhiteBox>
        <SC.CharacterCardContainer>
          <SC.CharacterCardImage src={Red}/>
        </SC.CharacterCardContainer>
        <SC.CharacterWhiteBoxText>Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O Grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.</SC.CharacterWhiteBoxText>
      </SC.CharacterCardWhiteBox>

      <SC.CharacterCardWhiteBox>
        <SC.CharacterCardContainer>
          <SC.CharacterCardImage src={Sybil}/>
        </SC.CharacterCardContainer>
        <SC.CharacterWhiteBoxText>Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.</SC.CharacterWhiteBoxText>
      </SC.CharacterCardWhiteBox>

      <SC.CharacterSwitchArrow2 />
    </SC.SecondContainer>

    <SC.ThirdContainer>
      <SC.FormWhiteBox>
        <SC.FormWhiteBoxTitle>FORMULÁRIO</SC.FormWhiteBoxTitle>
        <SC.FormWhiteBoxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</SC.FormWhiteBoxText>
      </SC.FormWhiteBox>
    </SC.ThirdContainer>

    <SC.Footer>
      <SC.GoTopButton />
    </SC.Footer> 
  </>
  );
}

export default App;
