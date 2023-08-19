import { useState } from 'react';
import logogit from '../assets/pngegg.png';
import Inputx from '../components/Inputx';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      
      if (data.id) {

      const isExist = repos.find(repo => repo.id == data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }
    }
        alert('Repositório não encontrado!')

    }

catch (error) {
      console.error('Erro ao buscar repositório:', error);
    }
  }

  return (
    <Container>
      <img src={logogit} width={72} height={72} alt="Github logo" />
      <Inputx value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
  );
}

export default App;
