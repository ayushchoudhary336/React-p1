import React from "react";

const Card1 = (props) => {
  return (
    <div className="w-100 h-75 bg-amber-700 text-2xl p-3 m-1 rounded-2xl border-2-solid text-center">
      <h1>hello i am card 1 </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        necessitatibus placeat dolorum voluptatum ex! Omnis?
      </p>
      <p>my name is {props.user}</p>
    </div>
  );
};

export default Card1;
