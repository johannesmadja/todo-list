import { useContext, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { DispatchContext } from "../context/TodoContext";

function TodoFeatures() {
  const [theme, setTheme] = useState("primary");
  const dispatch = useContext(DispatchContext);

  // handle select list change
  function handleChange(event) {
    const theme = event.target.value;
    setTheme(theme);
    dispatch({
      type: "SET_THEME",
      theme,
    });
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <div className="container card p-20">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <h1 className="mb-20 flex-fill">Ma Todo liste</h1>
          <select onChange={handleChange} value={theme}>
            <option value="primary">Couleur primaire</option>
            <option value="secondary">Couleur secondaire</option>
          </select>
        </div>

        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoFeatures;
