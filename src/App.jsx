import {  useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import TodoProvider from "./components/provider/TodoProvider";

function App() {
  const [theme, setTheme] = useState("primary");

  // handle select list change
  function handleChange(event) {
    setTheme(event.target.value);
  }

  return (

    <TodoProvider theme={theme}>
       <div className="d-flex flex-column justify-content-center align-items-center p-20">
            <div className="container card p-20">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <h1 className="mb-20 flex-fill">Ma Todo liste</h1>
                <select onChange={handleChange} value={theme} name="">
                  <option value="primary">Couleur primaire</option>
                  <option value="secondary">Couleur secondaire</option>
                </select>
              </div>

              <AddTodo />
              <TodoList/>
            </div>
          </div>
    </TodoProvider>
  );
}

export default App;
