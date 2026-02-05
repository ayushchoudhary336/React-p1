import React, { useState } from "react";

const Hooks = () => {
  const [a, seta] = useState(20);
  const [name, setname] = useState("ayush");

  let newval = () => {
    seta(40);
    setname("Ayush choudhary");
  };

  let newname = () => {
    setname("Ayush choudhary");
  };

  return (
    <div>
      <h1 className="text-xl text-red-600 shadow-2xs m-3">
        HELLO bro today we are gonna learn hooks{" "}
      </h1>
      <h1 className="text-4xl text-green-600">value of a is : {a} </h1>
      <button
        onClick={newval}
        className="bg-red-400 text-white rounded shadow-2xs px-3 py-2"
      >
        change value
      </button>
      <h2 className="text-3xl text-red-950">my name is : {name}</h2>
      <button className="bg-gray-800 text-white p-3 m-3" onClick={newname}>
        change name{" "}
      </button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
        aspernatur cum odio similique.
      </p>
    </div>
  );
};

export default Hooks;
