import {useState} from 'react';
import {useAppDispatch} from "./hook";
import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';
import Counter from "./components/Counter";

function App() {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if(text.trim().length && text.length <= 30) {
      dispatch(addTodo({text, description}));
      setText('');
      setDescription('');
    }
  }

  return (
      <div className='App'>
        <NewTodoForm
            valueTask={text}
            valueDescription = {description}
            updateText={setText}
            updateDescription={setDescription}
            handleAction={handleAction}
        />
        <Counter />
        <TodoList />
      </div>
  );
}

export default App;