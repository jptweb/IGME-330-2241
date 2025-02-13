import "./styles.css";
import { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("test");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
      

    });
    setNewItem(""); //clear our input

  };
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={e => {
              setNewItem(e.target.value);
              console.log("New item value:", e.target.value);
            }} />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 class="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        })}
      </ul>
    </>
  )
};

export default App;