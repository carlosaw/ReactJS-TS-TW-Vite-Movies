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
    <div className="container mx-auto max-w-screen-xl">

      <p className="bg-blue-400 flex items-center justify-center text-3xl mt-4 mb-4 p-4 font-bold">Total de filmes: {movies.length}</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 sm:grid-cols-1">
        {movies.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center border border-blue-500 pr-4 pl-4 pb-0 pt-4 hover:border-blue-300 hover:bg-gray-700 cursor-pointer">
            <img src={item.avatar} className="md:w-42 sm:w-34 block" />
            <div className="w-30 h-20 flex justify-center items-center mt-0 ">
              <p className="text-xl text-center">{item.titulo}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default App;