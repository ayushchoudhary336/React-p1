import React, { useState } from "react";

const Advancehooks = () => {
  const [num, setnum] = useState({ user: "Ayush", age: 20 });

  let newval = () => {
    const newnum = { ...num };
    newnum.user = "king";
    newnum.age = 26;
    setnum(newnum);
  };
  return (
    <div>
      <h1>
        {num.user}, {num.age}
      </h1>
      <button onClick={newval}>Click</button>
    </div>
  );
};

export default Advancehooks;
