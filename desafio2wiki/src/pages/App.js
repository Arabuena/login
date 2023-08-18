import Input from '..components/Input';
import logogit from '../assets/pngegg.png';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={logogit} width={72} height={72} alt="Github logo" />
      <Input />
    </Container>
  );
}

export default App;

