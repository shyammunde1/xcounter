import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incremntHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div style={{ margin: "10px" }}>
        <span>Count:{count}</span>
      </div>
      <div style={{ margin: "10px" }}>
        <button onClick={incremntHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
