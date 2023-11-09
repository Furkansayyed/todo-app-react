// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {

  const onDelete = (todo) =>{
    console.log("Delete function is called" , todo)

    setTodos(todos.filter((e) => {
      return e!== todo;
    }))
  }

  const [mode, setMode] = useState('dark');

  const darkMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.setAttribute("data-bs-theme", "light");
    }
    else {
      setMode('dark');
      document.body.setAttribute("data-bs-theme", "dark");
    }
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      Task: 'Go to Market',
      Description: 'This is task 1'
    },

    {
      sno: 2,
      Task: 'Go to Mall',
      Description: 'This is task 2'
    },
    {
      sno: 3,
      Task: 'Go to Andheri',
      Description: 'This is task 3'
    },

  ]);

  return (
    <>
      <Navbar title="Todos App" aboutText="About Us" darkMode={darkMode} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
