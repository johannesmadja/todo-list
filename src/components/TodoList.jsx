import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodo, toogleValidate, toogleEdit, saveEdit, selectTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => todo.edit ? (
        <EditTodo key={todo.id} todo={todo} saveEdit={(content) => saveEdit(todo.id, content)} cancelEdit={() => toogleEdit(todo.id)}/>
      ) : 
      (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          toogleValidate={() => toogleValidate(todo.id)}
          editTodo={() => toogleEdit(todo.id)}
          selectTodo={() => selectTodo(todo.id)}
        />
      ))}
    </ul>
  ) : (
    <p>Aucune tâche à afficher</p>
  );
}

export default TodoList;
