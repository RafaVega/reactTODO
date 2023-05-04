import React from 'react';
import './TodoCounter.css';

function TodoCounter(props){
    const progressPorcent = Math.floor((props.completedTodos/props.todosCount) * 100);
    return (
        <div className='counterWrap'>
            <h1>TUS TAREAS</h1>
            <h2 className='TodoCounter'>Has completado {props.completedTodos} de {props.todosCount}</h2>

            <div className="animated-progress progress-blue">
                <span style={{width: `${progressPorcent}%`}}></span>
            </div>
        </div>
    );
}

export {TodoCounter};