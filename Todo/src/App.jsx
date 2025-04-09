import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [inputHasText, setInputHasText] = useState(true);

  const handleSubmit = () => {

    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInputHasText(true);
    setInput("");
  };

   const handleChange = (e) => {
    let value = e.target.value;
    if(value != "")
    {
      setInputHasText(false);
    }
    else
    {
      setInputHasText(true);
    }
    setInput(value);
   }

  return (
    <>
      <div className="container">
        <div className="contents">
          <h className="heading">Todo Web-App</h>

          <div className="task-input-conatiner">
            <input
              type="text"
              onChange={handleChange}
              value={input}
            />
            <button disabled={inputHasText} onClick={handleSubmit}>Add</button>
          </div>

          <ul className="todos-list">
            <TodoList input={input} setTodos={setTodos} todos={todos} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
