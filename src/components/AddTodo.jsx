import { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodoFn }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      addTodoFn(value);
      setValue("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      addTodoFn(value);
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
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
