import { useEffect, useState } from "react";

function Clicker() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem("count");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
  };
  const resetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={buttonClick}>Click me</button>
      <button onClick={resetClick}>Reset</button>
    </div>
  );
}

export default Clicker;
