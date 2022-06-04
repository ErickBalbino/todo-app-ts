import React from 'react'

import Todo from '../models/todo'
import TodoItem from '../components/TodoItem'

// REACT.FC indicates that its a type of functional component (generic type)
const Todos: React.FC<{ items: Todo[] }> = (props) => { 
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  )
}

export default Todos