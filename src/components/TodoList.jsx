import React from "react";

const TodoList = ({ todos, handleDelete, handleUpdate }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button  onClick={() => handleUpdate(t.id)}>
            Update
          </button>

          <button  onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;