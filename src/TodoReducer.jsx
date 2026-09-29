function TodoReducer(state, action) {
  switch (action.type) {
    case "GET_ALL_TODOS":
      return {
        ...state,
        todoList: action.todos,
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo._id === action.todo._id ? action.todo : todo,
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo._id != action.todoId),
      };
    // case "VALIDATE_TODO":
    //   return {
    //     ...state,
    //     todoList: state.todoList.map((todo) =>
    //       todo._id === action.todoId
    //         ? {
    //             ...todo,
    //             done: !todo.done,
    //           }
    //         : todo,
    //     ),
    //   };
    case "TOGGLE_EDIT_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo._id === action.todoId
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
          todo._id === action.todoId
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
          todo._id == action.todoId
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
        theme: action.theme,
      };
    default:
      throw new Error("Action inconnue");
  }
}

export default TodoReducer;
