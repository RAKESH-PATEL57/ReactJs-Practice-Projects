import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {

    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInput("");
  };


  return (
    <>
      <div className="container">
        <div className="contents">
          <h className="heading">Todo Web-App</h>

          <div className="task-input-conatiner">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button disabled={input != "" ? false : true} onClick={handleSubmit}>Add</button>
          </div>

          <ul className="todos-list">
            <TodoList setTodos={setTodos} todos={todos} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
