import { useContext, useState } from "react";
import Button from "./Button";
import { DispatchContext } from "../context/TodoContext";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(DispatchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function addRequest() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://restapi.fr/api/todo", {
        method: "POST",
        body: JSON.stringify({
          content: value,
          edit: false,
          done: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const todoAdded = await response.json();
        dispatch({
          type: "ADD_TODO",
          todo: todoAdded,
        });
        setValue("");
      }
    } catch (error) {
      setError("Une erreur est survenue ", error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      addRequest();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      addRequest();
    }
  }

  return (
    <>
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
          text={isLoading ? "Chargement" : "Ajouter"}
          onClick={handleClick}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default AddTodo;
