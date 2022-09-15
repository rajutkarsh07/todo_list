import React from "react";

export default function Search() {
  const [formData, setFormData] = React.useState({
    search: "",
  });

  function handleChange(event) {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    console.log(value);
  }

  const [todo, setTodo] = React.useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (formData.search !== "") {
      setTodo((prevState) => {
        return [...prevState, formData.search];
      });
      // console.log(todo);
      setFormData({ search: "" });
    } else {
      return;
    }
  }

  console.log(todo);

  let styles, btnStyle;

  function completed(e) {
    e.preventDefault();
    console.log("button clicked");

    

    // btnStyle = {
    //   background: "#27C62D".
    // };
  }

  const todoList = todo.map((todo) => (
    <div className="todo-list-item">
      <div style={styles}>{todo}</div>
      <button className="completed-btn" style={btnStyle} onClick={completed}>
        Completed
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

      {todoList}
    </div>
  );
}
