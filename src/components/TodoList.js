import React, { useState, useEffect } from "react";

const TodoList = () => {
  const storedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(JSON.parse(storedTodos) || []);
  const [newTodo, setNewTodo] = useState("");

  // useEffect(() => {
  //   // Load todos from local storage on component mount
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  // }, []);

  useEffect(() => {
    // Save todos to local storage whenever todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = updatedTodo;
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="contactMain">
    <div className="todolist">
      <h1 className="header1">Locally Stored Todo List</h1>
      <div className="todoInput">
        <input
          id="todoIn"
          className="message todoMsg"
          type="text"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="button1 todoBtn" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <div className="todos">
        <ul id="todoUl">
          {todos.map((todo, index) => (
            <div className="todoInput " key={index}>
              <input
                type="text"
                className="message todoMsg"
                value={todo.text}
                onChange={(e) => handleEditTodo(index, e.target.value)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  backgroundColor: todo.completed
                    ? " #d74747"
                    : "rgba(53, 55, 48, 0.5)",
                }}
              />
              <div className="todoBtns">
                <button
                  className="button1 todoBtn"
                  onClick={() => handleToggleComplete(index)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="button1 todoBtn"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default TodoList;
