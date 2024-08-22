export const fetchFilmes = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./Filmes.json');
    const data = await response.json();
    return data;
  
  };
  

  