import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return   todos.concat({
        text:input,
        id:Math.floor(Math.random() * 10),
      });
    });

    setInput("");
  }

  const removeTask = id => setTodos(task => task.filter(t => t.id != id))

  return (
    <>
      <div className="container">
      <div className="contents">

     
      <h className="heading">Todo Web-App</h>

      <div className="task-input-conatiner">
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
        <button onClick={handleSubmit}>Add</button>
      </div>

      <ul className="todos-list">
        {todos.map(({text, id}) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTask(id)}>X</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
}

export default App;
