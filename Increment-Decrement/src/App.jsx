import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement  = () => {
    setCount((currentValue) => currentValue += 1);
  }
  const handleDecrement  = () => {
    setCount((currentValue) => currentValue-=1);
  }

  return (
    <>
      <h1>Increment-Decrement 👨‍💻</h1>
      <div className="card">
        <h1>count is <span className="countValue">{count}</span></h1>
        <div className="btns">
          <button onClick={handleIncrement}>Increment + </button>
          <button onClick={handleDecrement}>Decrement - </button>
        </div>
      </div>
    </>
  );
}

export default App;
