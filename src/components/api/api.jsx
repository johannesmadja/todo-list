export async function UpdateTodo(todo) {
  try {
    const { _id, ...newUpdateTod } = todo;
    const response = await fetch(`https://restapi.fr/api/todo/${_id}`, {
      method: "PATCH",
      body: JSON.stringify(newUpdateTod),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const todoUpdated = await response.json();
      return todoUpdated;
    } else {
      console.error(`Une erreur est survenue : ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function DeletedTodo(todoId) {
  try {
    const response = await fetch(`https://restapi.fr/api/todo/${todoId}`, {
      method : 'DELETE'
    })

    if (response.ok) {
      const deletedTodo = await response.json();
      return deletedTodo;
    }
  } catch (error) {
    console.error(error)
  }
}
