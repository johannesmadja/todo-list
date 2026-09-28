import { useContext } from "react";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";
import { StateContext } from "../context/TodoContext";

function TodoList() {

  const state = useContext(StateContext)

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ),
      )}
    </ul>
  ) : (
    <p>Aucune tâche à afficher</p>
  );
}

export default TodoList;
