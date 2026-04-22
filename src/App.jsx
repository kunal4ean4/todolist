import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const toggleChecked = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    );
  };
  const handleAdd = () => {
    const item = {
      id: todoList.length + 1,
      name: input,
      completed: false,
    };
    if (input.trim()) {
      setTodoList((prev) => [...prev, item]);
    }

    setInput("");
  };

  const handleDel = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <div className="btn-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Todo"
          name=""
          id=""
        />
        <button onClick={handleAdd}>Add</button>
        <br />

        <ul>
          {todoList.map((item) => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => toggleChecked(item.id)}
                  checked={item.completed}
                  type="checkbox"
                />
                <span className={item.completed ? "strikeThrough" : ""}>
                  {item.name}
                </span>
                <button onClick={() => handleDel(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
