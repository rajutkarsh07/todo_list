import React from "react";

export default function Search() {
  const [formData, setFormData] = React.useState({
    search: "",
  });

  const [todo, setTodo] = React.useState([]);

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

  function addTodo() {
    setTodo((prevState) => {
      return [...prevState, formData.search];
    });
    // console.log(todo);
  }

  // console.log(todo);

  const todoList = todo.map((todo) => <h1>new todo</h1>);

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
        />
        <button className="btn add-btn" onClick={addTodo}>
          {" "}
          Add{" "}
        </button>
      </form>
      {todoList}
    </div>
  );
}
