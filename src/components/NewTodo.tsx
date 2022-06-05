import React, { useRef } from 'react'

import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string ) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextRef.current!.value

    if(enteredText.trim().length === 0){
      // throw an Error
      return
    }

    props.onAddTodo(enteredText)

    todoTextRef.current!.value = '' //resetando o valor do input
  }

  return (
    <form action='' onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='todo_text'>Tarefa</label>

        <input 
          type='text' 
          id='todo_text'
          ref={todoTextRef}
        />

        <button>Adicionar tarefa</button>
    </form>
  )
}

export default NewTodo