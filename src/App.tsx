import { ChangeEvent, useEffect, useState } from "react";
import { Post } from './types/Post';
import Loading from './assets/progress-bar.gif';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const [addTitle, setAddTitle] = useState('');
  const [addBody, setAddBody ] = useState('');

  // Carrega assim que abre a página
  useEffect(() => {
    loadPosts();
  }, []);

  // Pega todos os posts
  const loadPosts = async () => {    
    try{      
      setLoading(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let json = await response.json();
      setTimeout(() => {
        setLoading(false);
      }, 2500);      
      setPosts(json);      
    } catch(e) {
      setLoading(false);
      setPosts([]);
      console.error(e);
    }        
  }

  // Adicionar Post
  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBody(e.target.value);
  }
  const handleAddClick = () => {
    //alert(addTitle+' - '+addBody);
    setAddTitle('');
    setAddBody('');
  }

  return (
    <div className="container mx-auto">
      
      {!loading && posts.length > 0 &&
      <>
        <fieldset className="border-2 mt-4 mb-4">
          <legend>Adicionar novo Post</legend>
          <input 
            className="block border" 
            type="text" 
            placeholder="Digite o Título"
            value={addTitle}
            onChange={handleAddTitleChange}
          />
          <textarea 
            className="block border" 
            value={addBody}
            onChange={handleAddBodyChange}
          ></textarea>
          <button 
            className="block border"
            onClick={handleAddClick}
          >Adicionar</button>
        </fieldset>

        <div className="bg-blue-400 flex items-center justify-center text-2xl mt-2 p-2 font-bold">Total de Posts: {posts.length}
        </div>

        <div className="">
          {posts.map((item, index) => (
            <div key={index} className="p-4 border border-t-0 border-r-0 border-l-0">
              <h4 className="text-blue-300 font-semibold text-xl">Título: {item.title}</h4>
              <small># {item.id} - Usuário: {item.userId}</small>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </>        
      }
      
      {loading &&
        <div className="flex justify-center items-center mt-40">
          <img src={Loading} alt="" width={200} />
        </div>
      }

      {!loading && posts.length === 0 &&
        <div className="flex items-center justify-center mt-40 p-4 bg-orange-600">
          <div className="text-xl">Não há posts para exibir!</div>
        </div>
      }

    </div>
  ); 
}

export default App;