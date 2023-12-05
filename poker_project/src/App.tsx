import './App.css';
import './index.css';
import { Button } from './components/atoms/button';
const aaa = () => {
  console.log('aaa');
};
function App() {
  return (
    <>
      <Button onClick={aaa}>{'aaaaa'}</Button>
    </>
  );
}

export default App;
