import { useEffect, useState } from "react";
import { Post } from './types/Post';
import { PostForm } from "./components/PostForm";
import { PostItem } from './components/PostItem';
import { api } from './api';

import Loading from './assets/progress-bar.gif';


const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  // Carrega assim que abre a página
  useEffect(() => {
    loadPosts();
  }, []);

  // Pega todos os posts
  const loadPosts = async () => {           
    setLoading(true);
    let json = await api.getAllPosts();
    setTimeout(() => {
      setLoading(false);
      setPosts(json);
    }, 2000);    
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if(json.id) {
      alert("Post adicionado com sucesso!");
    } else {
      alert('Ocorreu algum erro!');
    }   
  }

  return (
    <div className="container mx-auto">

      {!loading && posts.length > 0 &&
      <>
        <PostForm onAdd={handleAddPost}/>
        <div className="bg-blue-400 flex items-center justify-center text-2xl mt-2 p-2 font-bold">Total de Posts: {posts.length}
        </div>

        <div className="">
          {posts.map((item) => (
            <PostItem data={item} />
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