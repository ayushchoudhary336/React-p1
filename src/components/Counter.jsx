import React, { useState } from "react";

const Counter = () => {
  let [first, setfirst] = useState(0);

  let increase = () => {
    setfirst(first++);
  };

  let decrease = () => {
    setfirst(first--);
  };

  let increaseby = () => {
    setfirst(first + 5);
  };

  return (
    <div>
      <h1 className="h-80 w-80 bg-gray-500 text-9xl  text-center pt-10 ">
        {first}
      </h1>
      <button onClick={increase}>Increases</button>

      <button onClick={decrease}>Decreases</button>

      <button onClick={increaseby}>Jump by 5</button>
    </div>
  );
};

export default Counter;
