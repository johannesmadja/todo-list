import { DispatchContext, StateContext } from "../../context/TodoContext";
import { ThemeContext } from "../../context/Theme";
import { useReducer } from "react";
import TodoReducer from "../../TodoReducer";

function TodoProvider({  Children }) {
  const [state, dispatch] = useReducer(TodoReducer, {
    theme: "",
    todoList: [],
  });

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>
        <ThemeContext value={state.theme}>{Children}</ThemeContext>
      </DispatchContext>
    </StateContext>
  );
}

export default TodoProvider;
