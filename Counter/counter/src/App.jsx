import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="p-2">{count}</p>

      <div className="d-flex flex-row">
        <button className="p-2" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button className="p-2" onClick={() => setCount((count) => 0)}>
          Reset
        </button>
        <button className="p-2" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
