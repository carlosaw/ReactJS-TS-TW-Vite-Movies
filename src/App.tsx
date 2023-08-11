const App = () => {
  

  const handleSearch = () => {
    const formPesquisa = document.querySelector("form");
    
    if(formPesquisa){
      formPesquisa.onsubmit = (e) => {
        e.preventDefault();
        const pesquisa = e.target.pesquisa.value;
        if(pesquisa == "") {
          alert('Digite o nome do filme');
          return;
        }
        fetch(`https://www.omdbapi.com/?i=${pesquisa}$apikey=${apyKey}`);
      }
    } else {
      alert('Não achou');
    }
  }    
  
  // const [movies, setMovies] = useState<Movie[]>([]);

  // useEffect(() => {
  //   loadMovies();
  // }, []);

  // const loadMovies = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setMovies(json);
  //     });
  // }
  
  return (
    <div className="container mx-auto">
      <h1 className="bg-blue-400 text-center pb-2 font-semibold rounded-md">Filmes</h1>
      <form id="form" className="mt-6 p-3 border border-cyan-400 rounded-md flex">
        <input
          type="text"
          name="pesquisa" 
          placeholder="Digite o nome do filme"
          className="p-2 outline-none flex-1 rounded-md" />
        <button onClick={handleSearch} className="border border-cyan-400 ml-4">Pesquisar</button>
      </form>

      <div className="lista mt-4">
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col items-center w-60 text-center border border-cyan-400
          hover:border-cyan-600 p-4">
            <img src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX600.jpg" alt="" width={200} />
            <h2 className="text-xl text-center">Batman Begins</h2>
          </div>
          <div className="flex flex-col items-center w-60 text-center border border-cyan-400
          hover:border-cyan-600 p-4">
            <img src="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" width={200} />  
            <h2 className="text-xl">Batman v Superman: Dawn of Justice</h2>
          </div>
          <div className="flex flex-col items-center w-60 text-center border border-cyan-400
          hover:border-cyan-600 p-4">
            <img src="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" width={200} />  
            <h2 className="text-xl">Batman v Superman: Dawn of Justice</h2>
          </div>
        </div> 

      </div>
      
    </div>
  ); 
}

export default App;