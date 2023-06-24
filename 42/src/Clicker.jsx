import { useRef, useEffect, useState } from "react";

function Clicker({ keyName, color = "black", incrementCount }) {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem(keyName) ?? 0)
  );

  const buttonRef = useRef();
  console.log(buttonRef);

  useEffect(() => {
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
    incrementCount();
  };

  const resetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <p style={{ color }}>You clicked {count} times</p>
      <button ref={buttonRef} onClick={buttonClick}>
        Click me
      </button>
      <button onClick={resetClick}>Reset</button>
    </div>
  );
}

export default Clicker;
