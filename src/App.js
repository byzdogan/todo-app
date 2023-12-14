import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

function App() {

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState('all');

  return (
    <div className="todoapp">
      <Form 
        todos={todos} 
        setTodos={setTodos}
        task={task}
        setTask={setTask}
      />
      <List
        todos={todos} 
        setTodos={setTodos}
        filter={filter}
      />
      <Footer 
        todos={todos} 
        setTodos={setTodos} 
        counter={counter} 
        setCounter={setCounter} 
        filter={filter}  
        setFilter={setFilter}
      />      
    </div>
  );
}

export default App;
