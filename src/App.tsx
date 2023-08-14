import { useState } from "react";
import { Search } from './types/Search';

const App = () => {
  const [searchs, setSearchs] = useState<Search[]>([]);

  // useEffect(() => {
  //   loadMovies();
  // }, [movies]);

  const loadSearchs = () => {
    //const apyKey = "5a28fc97";
    //fetch(`http://www.omdbapi.com/?s=batman&apikey=${apyKey}`)
    //fetch(`http://www.omdbapi.com/?i=tt0372784&apikey=${apiKey}`)
    fetch('https://www.omdbapi.com/?i=tt0372784&apikey=5a28fc97')
    //fetch(`http://www.omdbapi.com/?apikey=${apiKey}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        //console.log(json);
        setSearchs(json);
      });
  }
  
  return (
    <div className="container mx-auto">

      <button className="block bg-blue-400" onClick={loadSearchs}>Carregar Filmes</button>

      Total de filmes: {searchs.length}

      <div className="grid grid-cols-6 gap-3">
        {searchs.map((item, index) => (
          <div key={index}>
            <img src={item.Poster} className="w-32 block" />
            {item.Title}
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default App;