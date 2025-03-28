import { useState } from "react";
import "./styles.css";

const App = () => {
  
  const [newItem, setNewItem] = useState("test");

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add To List</button>
      </form>
      <h1 className="header">Todo List</h1>

      <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
  )
};

export default App;