import React from "react";
import Rightcard from "./Rightcard";

const Rightcontent = (props) => {
  return (
    <div className="h-full w-2/3 p-6  ">
      <Rightcard users={props.users} />
    </div>
  );
};

export default Rightcontent;
