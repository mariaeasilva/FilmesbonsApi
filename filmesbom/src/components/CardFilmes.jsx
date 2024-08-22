import React from 'react';
import './CardFilmes.css'
//import imag from '../assets/react.svg'

function CardFilmes({filmes, ativaFavorito, isFavorito })  
 {
  return (
    <div id='blocofilme' style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>

      <img src={filmes.capa} alt={`Nome do(a) ${filmes.filme}`} width="100" /> 

      <div id='teste'>

        <div id='teste1'>
          <h2>Nome do filme:</h2>
          <p>{filmes.filme}</p>
        </div>
     
        <div id='teste1'>
          <h2>Ano de lançamento:</h2>
          <p>{filmes.ano_lancamento}</p>
        </div>
      
        <div id='teste1'>
         <h2>Ator principal:</h2>
         <p>{filmes.ator_principal}</p>
        </div>
      


      </div>
    
      <button id='botaofav' onClick={() => ativaFavorito(filmes)}>
        {isFavorito ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
}

export default CardFilmes;
