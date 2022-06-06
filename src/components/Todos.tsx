import React, { useContext } from "react";

import classes from "./Todos.module.css";

// contextos
import { TodosContext } from "../store/TodosContext";

import TodoItem from "../components/TodoItem";

// REACT.FC indicates that its a type of functional component (generic type)
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
