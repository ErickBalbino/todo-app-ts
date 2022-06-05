import React from 'react'

import classes from './Todos.module.css'

import Todo from '../models/todo'
import TodoItem from '../components/TodoItem'

// REACT.FC indicates that its a type of functional component (generic type)
const Todos: React.FC<{ items: Todo[], onRemoveTodo: ( todoId: string ) => void }> = (props) => { 

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem 
          key={item.id} 
          text={item.text} 
          id={item.id} 
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} 
        />
      ))}
    </ul>
  )
}

export default Todos