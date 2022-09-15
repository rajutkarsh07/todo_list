import React, { useState } from "react";

export default function Search() {
  const [formData, setFormData] = useState({
    search: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    console.log(value);
  }

  const [todo, setTodo] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    setTodo((prevState) => {
      return [
        ...prevState,
        { todo: formData.search, done: false, id: Date.now() },
      ];
    });
    //reset input
    setFormData({ search: "" });
  }

  const done = (id) => {
    let newTodo = todo.filter((todo) => todo.id !== id);
    let data = todo.filter((todo) => todo.id === id);
    setTodo(() => {
      return [...newTodo, { todo: data[0].todo, done: true, id: id }];
    });
  };

  const todoList = todo.map((todo) => (
    <div key={todo.id} className="todo-list-item">
      <p className={todo.done ? "done" : ""}>{todo.todo}</p>
      <button
        className="completed-btn"
        onClick={(e) => {
          e.preventDefault();
          done(todo.id);
        }}
      >
        Done
      </button>
    </div>
  ));

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          onChange={handleChange}
          name="search"
          value={formData.search}
          className="input"
          required
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </form>
      <div className="todo-head">
        <h2>Todo List</h2>
        <h4>{todo.length} todos remaining</h4>
      </div>

      {todoList.length > 0 ? todoList : " Add todo"}
    </div>
  );
}
