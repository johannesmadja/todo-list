import { useContext } from "react";
import Button from "./Button";
import { DispatchContext } from "../context/TodoContext";
import { UpdateTodo } from "./api/api";

function TodoItem({ todo }) {
  const dispatch = useContext(DispatchContext);

  async function Update(todo) {
    const updatedValue = await UpdateTodo(todo);
    dispatch({
      type: "UPDATE_TODO",
      todo: updatedValue,
    });
  }

  return (
    <li
      onClick={() =>
        dispatch({
          type: "SELECT_TODO",
          todoId: todo._id,
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
          Update({ ...todo, done: !todo.done });
        }}
      />
      <Button
        text="Modifier"
        classStyle="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          Update({ ...todo, edit: !todo.edit });
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "DELETE_TODO",
            todoId: todo._id,
          });
        }}
      />
    </li>
  );
}

export default TodoItem;
