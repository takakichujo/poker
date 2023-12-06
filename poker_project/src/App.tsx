import './index.css';
import { MoleculeRole } from './components/molecule/MoleculeRole';
import { MoleculeTrumps } from './components/molecule/MoleculeTrumps';
function App() {
  return (
    <>
      <MoleculeRole result='あああ' playerName='aaa' role='aaa' />
      <MoleculeTrumps
        image1='./src/img/card_spade_1.png'
        image2='./src/img/card_spade_1.png'
        image3='./src/img/card_spade_1.png'
        image4='./src/img/card_spade_1.png'
        image5='./src/img/card_spade_1.png'
      />
    </>
  );
}

export default App;
