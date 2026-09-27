import Button from "./Button";

function TodoItem({ todo, deleteTodo, toogleValidate, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`d-flex flex-row justify-content-center align-items-center mb-20 p-5 ${todo.selected && "selected"}`}
    >
      <span className="flex-fill">
        {todo.content} {todo.done ? "✅" : "⚠️"}
      </span>
      <Button
        text={todo.done ? "En cours" : "Valider"}
        classStyle="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          toogleValidate();
        }}
      />
      <Button
        text="Modifier"
        classStyle="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}

export default TodoItem;
