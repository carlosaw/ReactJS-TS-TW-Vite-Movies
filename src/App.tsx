const App = () => {
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
      <form className="mt-6 p-3 border border-cyan-400 rounded-md flex">
        <input 
          id="pesquisa" 
          placeholder="Digite o nome do filme"
          className="p-2 outline-none flex-1 rounded-md" />
        <button className="border border-cyan-400 ml-4">Pesquisar</button>
      </form>

      <div className="lista mt-4 bg-green-500">
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col items-center w-60 text-center bg-red-600 p-4">
            <img src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" width={200} />
            <h2 className="text-xl text-center">Batman Begins</h2>
          </div>
          <div className="flex flex-col items-center w-60 text-center bg-red-600 p-4">
            <img src="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" width={200} />  
            <h2 className="text-xl">Batman v Superman: Dawn of Justice</h2>
          </div>
          <div className="flex flex-col items-center w-60 text-center bg-red-600 p-4">
            <img src="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" width={200} />  
            <h2 className="text-xl">Batman v Superman: Dawn of Justice</h2>
          </div>
        </div> 

      </div>
      
    </div>
  ); 
}

export default App;