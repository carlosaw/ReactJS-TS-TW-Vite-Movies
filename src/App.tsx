import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './reducers/peopleList';

const App = () => {

  const [list, dispatch] = usePeopleList();
  const [ nameInput, setNameInput] = useState('');

  const handleAddButton = () => {
    if(nameInput) {
      dispatch({
        type: 'ADD',
        payload: {
        name: nameInput}
      });
      setNameInput('');
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  return (
    <div className="container mx-auto">
      <input type='text' value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr/>
      Lista de Pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  ); 
}

export default App;