import { useEffect, useState } from "react";
import "./box.css";

function Color({ onClick, col }) {
  return (
    <>
      {col.map((color) => {
        return (
          <button key={color} onClick={() => onClick(color)}>
            {color.toUpperCase()}
          </button>
        );
      })}
      <br />
      <button onClick={() => onClick("yellow")}>RESET</button>
    </>
  );
}

function App() {
  const [color, setColor] = useState("yellow");
  const [isRuning, setIsRunning] = useState(false);
  const colors = ["red", "blue", "green", "yellow", "pink", "orange"];

  const handleClick = (e) => {
    setColor(e);
  };

  useEffect(() => {
    if (!isRuning) return;
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRuning]);

  return (
    <>
      <div className={`box ${color}`}>{color}</div>
      <Color onClick={handleClick} col={colors} />
      <br />
      <button onClick={() => setIsRunning(true)}>START</button>
      <button onClick={() => setIsRunning(false)}>STOP</button>
    </>
  );
}
export default App;
