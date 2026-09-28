import { useContext, useState } from "react";
import Button from "./Button";
import { DispatchContext } from "../context/TodoContext";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(DispatchContext);

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {

      dispatch({
        type: "ADD_TODO",
        content: value,
      });
      setValue("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      dispatch({
        type: "ADD_TODO",
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
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
