import { useContext, useState } from "react";
import Button from "./Button";
import { DispatchContext } from "../context/TodoContext";
import { UpdateTodo } from "./api/api";

function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.content);
  const dispatch = useContext(DispatchContext);

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  async function Update(todo) {
    const updatedValue = await UpdateTodo(todo);
    dispatch({
      type: "UPDATE_TODO",
      todo: updatedValue,
    });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      dispatch({
        type: "EDIT_TODO",
        todoId: todo._id,
        content: value,
      });
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        className="mr-15 flex-fill"
        type="text"
        name="todo"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ajouter une tâche"
      />
      <Button
        text="Modifier"
        onClick={() => Update({ ...todo, edit: !todo.edit, content: value })}
        classStyle="mr-15"
      />
      <Button
        text="Annuler"
        onClick={() => Update({ ...todo, edit: !todo.edit })}
        classStyle="mr-15"
      />
    </div>
  );
}

export default EditTodo;
