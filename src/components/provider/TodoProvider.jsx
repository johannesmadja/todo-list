import { DispatchContext, StateContext } from "../../context/TodoContext";
import ThemeContext from "../../context/Theme";
import { useReducer } from "react";
import TodoReducer from "../../TodoReducer";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(TodoReducer, {
    theme: "primary",
    todoList: [],
  });

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>
        <ThemeContext value={state.theme}>{children}</ThemeContext>
      </DispatchContext>
    </StateContext>
  );
}

export default TodoProvider;
