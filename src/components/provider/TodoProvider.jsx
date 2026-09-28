import { DispatchContext, StateContext } from "../../context/TodoContext";
import { ThemeContext } from "../../context/Theme";
import { useReducer } from "react";
import TodoReducer from "../../TodoReducer";

function TodoProvider({theme, Children }) {
  const [state, dispatch] = useReducer(TodoReducer, { todoList: [] });
  
  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>
        <ThemeContext value={theme}>{Children}</ThemeContext>
      </DispatchContext>
    </StateContext>
  );
}

export default TodoProvider;
