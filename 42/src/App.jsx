import { useMemo, useState } from "react";
import Clicker from "./Clicker";
import People from "./People";

export default function App({ children, clickersCount }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const randomColors = useMemo(() => {
    console.log("randomColors");
    const randomColors = [];
    for (let i = 0; i < clickersCount; i++)
      randomColors.push(`hsl(${Math.random() * 360}, 50%, 50%)`);
    return randomColors;
  }, [clickersCount]);

  console.log(randomColors);
  console.log(clickersCount);

  return (
    <>
      {children}

      <div>Total count: {count}</div>

      <button onClick={toggleClickerClick}>
        {hasClicker ? "Hide Clicker" : "Show Clicker"}
      </button>
      {hasClicker ? (
        <>
          {[...Array(clickersCount)].map((value, index) => {
            return (
              <Clicker
                key={index}
                incrementCount={incrementCount}
                keyName={`count${index}`}
                color={randomColors[index]}
              />
            );
          })}
        </>
      ) : null}

      <People />
    </>
  );
}
