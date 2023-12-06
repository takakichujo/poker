import './index.css';
import { TemplatesField } from './components/templates/TemplatesField';

function App() {
  const onClick = () => {
    console.log('a');
  };
  return (
    <TemplatesField
      myResult='あああ'
      myPlayerName='aaa'
      myRole='aaa'
      enemyResult='あああ'
      enemyPlayerName='aaa'
      enemyRole='aaa'
      myImage1='./src/img/card_spade_1.png'
      myImage2='./src/img/card_spade_1.png'
      myImage3='./src/img/card_spade_1.png'
      myImage4='./src/img/card_spade_1.png'
      myImage5='./src/img/card_spade_1.png'
      enemyImage1='./src/img/card_spade_1.png'
      enemyImage2='./src/img/card_spade_1.png'
      enemyImage3='./src/img/card_spade_1.png'
      enemyImage4='./src/img/card_spade_1.png'
      enemyImage5='./src/img/card_spade_1.png'
      onClick={onClick}
    >
      {'あああ'}
    </TemplatesField>
  );
}

export default App;
