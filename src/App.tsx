import { useEffect, useState } from "react";
import { Movie } from './types/Movie';
import Loading from './assets/progress-bar.gif';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  // Carrega assim que abre a página
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://api.b7web.com.br/cinema/')
      .then((resposta) =>  resposta.json())
      .then((json) => setMovies(json))
      .catch((e) => {
        alert("Tente novamente mais tarde")
        setLoading(false);
        setMovies([])
        console.error(e);
      })
      setLoading(false);
    }, 1000)
  }

  return (
    <div className="container mx-auto">
      {!loading &&
      <>
        <div className="bg-blue-400 flex items-center justify-center text-3xl mt-4 mb-4 p-4 font-bold">Total de filmes: {movies.length}</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
          {movies.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center border border-blue-500 pr-4 pl-4 pb-0 pt-4 hover:border-blue-300 hover:bg-gray-700 cursor-pointer">
              <img src={item.avatar} className="w-42" />
              <div className="w-30 h-20 flex justify-center items-center mt-0 ">
                <p className="text-xl text-center">{item.titulo}</p>
              </div>          
            </div>
          ))}
        </div>
      </>        
      }
      
      {loading &&
        <div className="flex justify-center items-center mt-40">
          <img src={Loading} alt="" width={200} />
          {/* <div>Carregando...</div> */}
        </div>
      }
    </div>
  ); 
}

export default App;