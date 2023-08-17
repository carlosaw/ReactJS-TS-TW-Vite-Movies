import { useEffect, useState } from "react";
import { Post } from './types/Post';
import { PostForm } from "./components/PostForm";
import { PostItem } from './components/PostItem';

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

  const handleAddPost = async (title: string, body: string) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method:'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-Type' : 'application/json' }
    });
    let json = await response.json();
    //console.log(json);
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