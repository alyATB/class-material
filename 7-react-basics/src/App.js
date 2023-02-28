import "./app.css";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("blue");

  console.log("current value of counter: ", counter);
  console.log("current value of color: ", color);

  return (
    <div className="wrapper">
      <h2>Test from React</h2>
      <p>Counter {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <p className={`color-${color}`}>Current color is {color}</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default App;
