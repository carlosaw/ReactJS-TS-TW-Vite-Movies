import { useEffect, useState } from "react";
import { Movie } from './types/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Carrega assim que abre a página
  useEffect(() => {
    loadMovies();
  }, []);
  /*
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      });
      alert('Opa');
  }
  */

  const loadMovies = async () => {
    let response = await fetch('https://api.b7web.com.br/cinema/');
    let json = await response.json();
    setMovies(json);
  }

  return (
    <div className="container mx-auto">

      {/* <button 
        className="block bg-blue-400"
        onClick={loadMovies}
      >Carregar Filmes
      </button> */}

      <div className="text-center p-4 bg-blue-600 mb-10 mt-10">
        <h1 className="text-4xl">Total de filmes: {movies.length}</h1>
      </div>

      <div className="grid grid-cols-4 gap-10">

        {movies.map((item, index) => (
          <div
            key={index} 
            className="flex justify-center items-center flex-col p-6 border border-blue-600 hover:border-blue-400 hover:bg-gray-800 cursor-pointer">
              <img src={item.avatar} className="w-30 block mb-3" />
            <p className="text-xl text-gray-300">{item.titulo}</p>
          </div>
        ))}

      </div>
    </div>
  ); 
}

export default App;