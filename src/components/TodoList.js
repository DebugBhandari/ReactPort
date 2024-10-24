import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import Tictactoe from "./Tictactoe";

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
    <div className="randomPage" id="todoList">
      <div className="tic">
        <div className="tac header1">TicTacToe!!!</div>
        <div className="toe">
          <Tictactoe />
        </div>
      </div>
      <div className="todolist">
        <h1 className="header1">Locally Stored Todo List</h1>

        <div className="todoInput">
          <input
            id="todoIn"
            className="message todoMsg"
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleAddTodo();
              }
            }}
          />
          <FontAwesomeIcon
            className="todoBtn"
            id="addTodo"
            icon={icon({ name: "plus", style: "solid" })}
            onClick={handleAddTodo}
          />
        </div>
        <div className="todos">
          <ul id="todoUl">
            {todos.map((todo, index) => (
              <div className="todo" key={index}>
                <input
                  type="text"
                  className="message todoMsg"
                  value={todo.text}
                  onChange={(e) => handleEditTodo(index, e.target.value)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    backgroundColor: todo.completed
                      ? " #d74747"
                      : "rgba(53, 55, 48, 0.5)"
                  }}
                />
                <div className="todoBtns">
                  {todo.completed ? (
                    <FontAwesomeIcon
                      className="todoBtn"
                      icon={icon({ name: "circle-check", style: "solid" })}
                      onClick={() => handleToggleComplete(index)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="todoBtn"
                      icon={icon({ name: "circle-check", style: "regular" })}
                      onClick={() => handleToggleComplete(index)}
                    />
                  )}

                  <FontAwesomeIcon
                    className="todoBtn"
                    icon={icon({ name: "x", style: "solid" })}
                    onClick={() => handleDeleteTodo(index)}
                  />
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
