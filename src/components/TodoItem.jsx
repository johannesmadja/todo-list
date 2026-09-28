import { useContext } from "react";
import Button from "./Button";
import { DispatchContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const dispatch = useContext(DispatchContext);

  return (
    <li
      onClick={() =>
        dispatch({
          type: "SELECT_TODO",
          todoId: todo.id,
        })
      }
      className={`d-flex flex-row justify-content-center align-items-center mb-20 p-5 ${todo.selected && "selected"}`}
    >
      <span className="flex-fill">
        {todo.content} {todo.done ? "✅" : "⚠️"}
      </span>
      <Button
        text={todo.done ? "En cours" : "Valider"}
        classStyle="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "VALIDATE_TODO",
            todoId: todo.id,
          });
        }}
      />
      <Button
        text="Modifier"
        classStyle="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_EDIT_TODO",
            todoId: todo.id,
          });
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "DELETE_TODO",
            todoId: todo.id,
          });
        }}
      />
    </li>
  );
}

export default TodoItem;
