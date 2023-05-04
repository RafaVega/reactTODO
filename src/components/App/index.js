import React from "react";
import { AppPage } from "./AppPage";

const version = 'TODOS_V1';
// const defaultTodo = [
//    {text : 'Cortar Cebolla', completed : false}
//   ,{text : 'Tomar Curso React', completed: false}
//   ,{text : 'Jugar Overwatch', completed: true}
//   ,{text : 'Comprar Aguacate', completed: false}
// ];

function App(props) {
  const localStorageTodos = localStorage.getItem(version);
  let userTodos = JSON.parse(localStorageTodos) ?? [];

  const [searchValue, setSearchValue] = React.useState('');
  const [todos,setTodos] = React.useState(userTodos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const todosCount = todos.length;

  const filterTodos = todos.filter( todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()));

  const updateTodos = (newTodos) => {
    const stringTodos = JSON.stringify(newTodos);
    localStorage.setItem(version,stringTodos);
    setTodos(newTodos);
  }

  const toggleCompleteTodo = (text) =>{
    const todoIndex = userTodos.findIndex(todo => todo.text === text);
    userTodos[todoIndex].completed = !userTodos[todoIndex].completed;
    const newTodos = [...userTodos];
    updateTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const isConfirmed = window.confirm(`¿Deseas eliminar la tarea: ${text}?`);

    if(isConfirmed){
      const todoIndex = userTodos.findIndex(todo => todo.text === text);
      userTodos.splice(todoIndex,1);
      const newTodos = [...userTodos];
      updateTodos(newTodos);
    }
        
  }

  return (
    <AppPage 
      completedTodos = {completedTodos}
      todosCount = {todosCount}
      filterTodos = {filterTodos}
      searchValue= {searchValue}
      toggleCompleteTodo = {toggleCompleteTodo}
      deleteTodo = {deleteTodo}
      setSearchValue = {setSearchValue}
    />
  );
}

export default App;
