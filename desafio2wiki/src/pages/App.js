
import logogit from '../assets/pngegg.png';

import Inputx from '../components/Inputx';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={logogit} width={72} height={72} alt="Github logo" />
      <Inputx />
    </Container>
  );
}

export default App;

