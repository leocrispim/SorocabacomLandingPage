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

      <SC.CharacterCardContainer>
        <SC.CharacterCardImage src={Grant}/>
      </SC.CharacterCardContainer>

      <SC.CharacterCardContainer>
        <SC.CharacterCardImage src={Red}/>
      </SC.CharacterCardContainer>

      <SC.CharacterCardContainer>
        <SC.CharacterCardImage src={Sybil}/>
      </SC.CharacterCardContainer>

      <SC.CharacterSwitchArrow2 />
    </SC.SecondContainer>

    <SC.ThirdContainer>
      <SC.FormWhiteBox />
    </SC.ThirdContainer>

    <SC.Footer>
      <SC.GoTopButton />
    </SC.Footer> 
  </>
  );
}

export default App;
