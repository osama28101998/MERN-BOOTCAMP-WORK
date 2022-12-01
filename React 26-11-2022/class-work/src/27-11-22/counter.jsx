import React from "react";

export default function Counter() {
  let [count, setCount] = React.useState(0);

  const handleclick = () => {
    if (count.toString() == "Zero") {
      count = 1;
      setCount(count++);
    } else {
      setCount(count++);
    }
  };
  const resetCount = () => {
    setCount((count = "Zero"));
  };
  //count==0 ? "Zero" : count
  const decCount = () => {
    if (count == 0) {
      setCount((count = "Zero"));
    } else if (count.toString() == "Zero") {
      count = -1;
      setCount(count--);
    } else {
      setCount(count--);
    }
  };

  return (
    <div>
      <h1 id="h1">{count}</h1>
      <button onClick={() => handleclick()}>Increment</button>
      <button onClick={() => resetCount()}>Reset</button>
      <button onClick={() => decCount()}>Decrement</button>
    </div>
  );
}
