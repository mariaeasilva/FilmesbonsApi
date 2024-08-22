import React from 'react';
import CardFilmes from './CardFilmes';


function ListaFilmes({filmes, ativaFavorito })  // criou o componente com os 2 parametros que foi colocado no paises.jxs 

{
  return (
    <div>
      {filmes.map((filmes) =>  // fazer a copiar dos itens do vetor 

      (
        <CardFilmes 

        key={filmes.id}
        filmes={filmes}
      
        ativaFavorito={ativaFavorito}
        isFavorite={false}
         
        />
      ))}
    </div>
  );
}

export default ListaFilmes;

/*const CountryList = ({ countries, onToggleFavorite }) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onToggleFavorite={onToggleFavorite}
          isFavorite={false}
        />
      ))}
    </div>
  );
};*/

//export default CountryList;
