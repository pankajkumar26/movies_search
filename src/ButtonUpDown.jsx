import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(100);
  }, []);

  function increase(count) {
    setCount((count) => count + 1);
  }
  function decrease(count) {
    setCount((count) => count - 1);
  }
  return (
    <div className="App">
      <button onClick={decrease}> - </button>
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
    </div>
  );
}
