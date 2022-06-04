import React from 'react'

const NewTodo = () => {

  const submitHandler = (event: React.FormEvent) => {
      event.preventDefault()
  }

  return (
    <form action='' onSubmit={submitHandler}>
        <label htmlFor='todo_text'>Todo text</label>
        <input type='text' id='todo_text' />
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo