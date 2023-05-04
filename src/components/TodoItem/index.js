import React from 'react';
import './TodoItem.css';
import {FaTrashAlt} from 'react-icons/fa';
import {MdRadioButtonUnchecked} from 'react-icons/md';
import {MdOutlineCheckCircleOutline} from 'react-icons/md';
 

function TodoItem(props){
  const iconState = props.completed ? <MdOutlineCheckCircleOutline /> : <MdRadioButtonUnchecked />;

  return (
      <li className="TodoItem borderR">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        {iconState}
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaTrashAlt />
      </span>
    </li>
  );
}

export {TodoItem};