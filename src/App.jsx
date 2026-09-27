import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeContext from "./context/Theme";
import TodoReducer from "./TodoReducer";

function App() {
  const [theme, setTheme] = useState("primary");
  const [state, dispatch] = useReducer(TodoReducer, { todoList: [] });

  function addTodoFn(content) {
    dispatch({
      type: "ADD_TODO",
      content,
    });
  }

  // Delete todo from list
  function deleteTodo(todoId) {
    dispatch({
      type: "DELETE_TODO",
      todoId,
    });
  }

  // toogle validate todo
  function toogleValidate(todoId) {
    dispatch({
      type: "VALIDATE_TODO",
      todoId,
    });
  }

  // Edition
  function toogleEdit(todoId) {
    dispatch({
      type: "TOGGLE_EDIT_TODO",
      todoId,
    });
  }

  // Apply Edition
  function saveEdition(todoId, content) {
    dispatch({
      type: "EDIT_TODO",
      todoId,
      content,
    });
  }

  // select Todo
  function selectTodo(todoId) {
    dispatch({
      type: "SELECT_TODO",
      todoId,
    });
  }

  // handle select list change
  function handleChange(event) {
    setTheme(event.target.value);
  }

  return (
    <ThemeContext value={theme}>
      <div className="d-flex flex-column justify-content-center align-items-center p-20">
        <div className="container card p-20">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h1 className="mb-20 flex-fill">Ma Todo liste</h1>
            <select onChange={handleChange} value={theme} name="">
              <option value="primary">Couleur primaire</option>
              <option value="secondary">Couleur secondaire</option>
            </select>
          </div>

          <AddTodo addTodoFn={addTodoFn} />
          <TodoList
            todoList={state.todoList}
            deleteTodo={deleteTodo}
            toogleValidate={toogleValidate}
            toogleEdit={toogleEdit}
            saveEdit={saveEdition}
            selectTodo={selectTodo}
          />
        </div>
      </div>
    </ThemeContext>
  );
}

export default App;
