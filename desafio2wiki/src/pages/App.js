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
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      } else {
        alert('Repositório não encontrado!');
      }
    } catch (error) {
      console.error('Erro ao buscar repositório:', error);
      alert('Erro ao buscar repositório. Verifique a conexão ou o nome do repositório.');
    }
  };
  

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
  
    // Filtrar a lista de repositórios para remover o repositório com o ID correspondente
    const updatedRepos = repos.filter(repo => repo.id !== id);
  
    // Atualizar a lista de repositórios com o novo array filtrado
    setRepos(updatedRepos);
  };
  

  return (
    <Container>
      <img src={logogit} width={72} height={72} alt="Github logo" />
      <Inputx value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
