import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyAmount,
} from "../reduxstore/counterslice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setnum] = useState(5);

  return (
    <div className=" h- h-screen bg-black text-white p-5">
      <h1 className="text-6xl">{count}</h1>
      <div className="gap-3">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className=" bg-gray-800 text-white px-3 py-1 m-4 rounded hover:border-2 border-blue-700"
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className=" bg-gray-800 text-white px-3 py-1 rounded m-5 hover:border-2 border-blue-700"
        >
          {" "}
          Decrement
        </button>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setnum(e.target.value);
          }}
          className="bg-gray-800 text-white px-2 py-1 focus:outline-none hover:border-2 border-pink-800"
        />
        <button
          onClick={() => {
            dispatch(incrementbyAmount(Number(num)));
          }}
          className=" bg-gray-800 text-white px-3 py-1.5 rounded m-5 hover:border-2 border-blue-700"
        >
          {" "}
          Increment by Amount
        </button>
      </div>
    </div>
  );
};

export default App;
