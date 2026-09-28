function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            edit: false,
            done: false,
            selected: false,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id != action.todoId),
      };
    case "VALIDATE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.todoId
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo,
        ),
      };
    case "TOGGLE_EDIT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.todoId
            ? {
                ...todo,
                edit: !todo.edit,
              }
            : todo,
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.todoId
            ? {
                ...todo,
                edit: false,
                content: action.content,
              }
            : todo,
        ),
      };
    case "SELECT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id == action.todoId
            ? {
                ...todo,
                selected: true,
              }
            : {
                ...todo,
                selected: false,
              },
        ),
      };
      case "SET_THEME":
        return {
          ...state, 
          theme : action.theme
        }
    default:
      throw new Error("Action inconnue");
  }
}

export default TodoReducer;
