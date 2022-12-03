import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateId, setUpdateId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateId) {
      const updateTodo = todos.find((i) => i.id === updateId);
      const updatedTodos = todos.map((t) =>
        t.id === updateTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setUpdateId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleUpdate = (id) => {
    const updateTodo = todos.find((i) => i.id === id);
    setTodo(updateTodo.todo);
    setUpdateId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          updateId={updateId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;