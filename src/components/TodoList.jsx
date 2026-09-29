import { useContext, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";
import { DispatchContext, StateContext } from "../context/TodoContext";

function TodoList() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let shouldCancel = false;
    async function fetctAllTodo() {
      setIsLoading(true);
      try {
        const response = await fetch("https://restapi.fr/api/todo");

        if (response.ok) {
          if (!shouldCancel) {
            let todos = await response.json();
            if (!Array.isArray(todos)) {
              todos = [todos];
            }
            dispatch({
              type: "GET_ALL_TODOS",
              todos: todos,
            });
          }
        } else {
          console.error("Une erreur est survenue");
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (!shouldCancel) {
          setIsLoading(false);
        }
      }
    }

    fetctAllTodo();
    return () => {
      shouldCancel = true;
    };
  }, []);

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo._id} todo={todo} />
        ) : isLoading ? (
          <p>Chargement en cours </p>
        ) : (
          <TodoItem key={todo._id} todo={todo} />
        ),
      )}
    </ul>
  ) : (
    <p>Aucune tâche à afficher</p>
  );
}

export default TodoList;
