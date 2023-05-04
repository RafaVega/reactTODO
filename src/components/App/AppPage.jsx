import React  from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import './App.css';
import logo from '../../resources/img/logo.jpg';

function AppPage ({
    completedTodos,
    todosCount,
    filterTodos,
    searchValue,
    toggleCompleteTodo,
    deleteTodo,
    setSearchValue
}){
    return <React.Fragment>
      <section className="seperator-wrapper">
        <div className="seperator gradient">
        </div>
      </section>
      <div className="container">
        <div className="newTaskWrap borderR">
          <form className="newTaskForm">
            <h1>Crear nueva tarea</h1>
            <div className="newTaskInputWrap">
              <input className="newTaskInput borderR" type="text" placeholder="" />
                <label>¿Qué se debe hacer?</label>
                <span className="focus-border">
                  <i></i>
                </span>
            </div>
            <CreateTodoButton />
            <img src={logo} alt="Logo" />
          </form>
        </div>

        <div className="myTaskWrap">
          
          <TodoCounter 
            completedTodos={completedTodos}
            todosCount = {todosCount}
          />
      
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {
              filterTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={ () => toggleCompleteTodo(todo.text)}
                  onDelete={ () =>  deleteTodo(todo.text)}
                />
              ))
            }
          </TodoList>
      
        </div>
      </div>
    </React.Fragment>
}

export {AppPage};