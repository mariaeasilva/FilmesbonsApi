import React, {useState} from 'react'; // funçao para atualizar
import {fetchFilmes} from './services/api'; // funçao para receber futuramente os dados da api 
import ListaFilmes from './components/ListaFilmes';
import Favoritos from './components/Favoritos';
import './filmes.css'


const filmes = () => {

  const [filmes, setFilmes] = useState([]);   // paises(varivael), setPaises(funcao)] = useState([])(atualizar ) // ver com todos os dados da api devido o setPaises(dadosPaises)
  const [favoritos, setFavoritos] = useState([]); 

 const carregaFilmes = async () => {
    try {
      const dadosFilmes = await fetchFilmes(); // dados paises recebeu od dados da api

      setFilmes(dadosFilmes); // chamou a variavel e colocou os dados d api (importcao)

    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  const alternarFavorito = (filmes) => {
    if (favoritos.find(fav => fav.id === filmes.id))  // find vai encotrar 1 item e verificar se ele existe no fav , vai ver se tem o id e igual algum item lista normal 
    {
      // Remove from favorites and add back to countries
      setFavoritos(prevFavoritos => prevFavoritos.filter(fav => fav.id !== filmes.id));
      setFilmes(prevFilmes => [...prevFilmes, filmes].sort((a, b) => a.filme.localeCompare(b.filme)));  
    } else {
      // Remove from countries and add to favorites
      setFilmes(prevFilmes => prevFilmes.filter(c => c.id !== filmes.id));
      setFavoritos(prevFavoritos => [...prevFavoritos, filmes].sort((a, b) => a.filme.localeCompare(b.filme)));
    }
  };


  return (
    <div className="app-container">
      <h1>LISTA DE FILMES</h1>
      <button id='btncarrega'  onClick={carregaFilmes}>Carregar Filmes</button>
      <div className="lists-container">
        <div className="list">
          <h2>Todos Filmes</h2>

          <ListaFilmes filmes={filmes} ativaFavorito={alternarFavorito} />  {/*variavel importada la em cima e tambem esta na pasta de componentes */}

        </div>
        <div className="list">
          <h2>Favoritos</h2>
         <Favoritos favoritos={favoritos} ativaFavorito={alternarFavorito} />
        </div>
      </div>
    </div>
  );
};

export default filmes;
