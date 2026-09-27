import { useState } from "react";
import Button from "./Button";

function EditTodo({ todo, saveEdit, cancelEdit }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      saveEdit(value);
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
        onClick={() => saveEdit(value)}
        classStyle="mr-15"
      />
      <Button text="Annuler" onClick={cancelEdit} classStyle="mr-15" />
    </div>
  );
}

export default EditTodo;
