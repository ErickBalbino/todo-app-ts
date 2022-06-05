import { useState } from 'react';
import './App.css';

import Todos from './components/Todos'
import Todo from './models/todo'
import NewTodo from './components/NewTodo';

const App =() => {
  const[todos, setTodos] = useState<Todo[]>([
    
  ])

  const onAddTodoHandler = ( todoText: string ) => {
    const newTodo = new Todo(todoText)

    setTodos((prevState) => {
      return prevState.concat(newTodo)
    })
  }

  const onRemoveTodoHandler = ( todoId: string ) => {
    setTodos((prevState) => {
      return prevState.filter(item => item.id !== todoId)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos 
        items={todos} 
        onRemoveTodo={onRemoveTodoHandler} 
      />
    </div>
  );
}

export default App;
