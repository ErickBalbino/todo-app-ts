import { createContext } from 'react'

import Todo from '../models/todo'

const TodosContext = createContext<{
    items: Todo[],
    addTodo: () => void,
    removeTodo: ( todoId: string ) => void 
}>({
    items: [],
    addTodo: () => {},
    removeTodo: ( todoId: string ) => {}
})