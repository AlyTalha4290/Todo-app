import React from "react";

const TodoForm = ({ handleSubmit, todo, updateId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> {updateId ? "Enter" : "Enter"}</button>
    </form>
  );
};

export default TodoForm;