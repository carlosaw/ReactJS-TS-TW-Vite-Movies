import { useState, ChangeEvent } from 'react';

type Props = {
  onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {
  const [addTitle, setAddTitle] = useState('');
  const [addBody, setAddBody ] = useState('');

  // Adicionar Post
  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBody(e.target.value);
  }

  const handleAddClick = async () => {
    if(addTitle && addBody) {
      onAdd(addTitle, addBody);
    } else {
      alert('Preencha os campos');
    }
  }

  return (
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
      >
      </textarea>
      <button 
        className="block border"
        onClick={handleAddClick}
      >Adicionar</button>
    </fieldset>
  );
}