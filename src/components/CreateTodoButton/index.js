import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
  const myFunction = (msg) => alert(msg);
  return (
    <button 
      className="CreateTodoButton button-64"
      type='button'
      onClick={ _ => myFunction('click!')}
    >
      <span className="text">Agregar</span>
    </button>
    );
  }
  
  export {CreateTodoButton};