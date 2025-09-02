import { useState } from 'react'

function Todo() {

    // State for the list of todos (starts as an empty array)
    const [todos, setTodos] = useState([]);
    // State for the current input text
    const [input, setInput] = useState('');

    // When called, this function adds the input value to the todos array
    function addTodo() {
        if (input.trim() !== '') { // Check that the input is not empty
            setTodos([...todos, input]);
            setInput('');  // Clear the input field after adding
        }
    }


    // This function updates the input state as the user types
    function handleInputChange(e) {
        setInput(e.target.value);
    }



    return (
        <>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a new todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    // Use the index as key for simplicity; in a real app, try to use a unique id
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    );
}

export default Todo;