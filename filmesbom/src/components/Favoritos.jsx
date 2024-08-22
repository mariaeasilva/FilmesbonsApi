import React from 'react';
import CardFilmes from './CardFilmes.jsx';

function Favoritos({ favoritos, ativaFavorito }) {
  return (
    <div>
      {favoritos.map((filmes) => (
        <CardFilmes
         
          key={filmes.id}
          filmes={filmes}
      
        ativaFavorito={ativaFavorito}
        isFavorite={true}
         
        />
      ))}
    </div>
  );
}

export default Favoritos;
