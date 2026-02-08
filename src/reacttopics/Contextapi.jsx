import React from "react";
import Navbar from "../pages/Navbar";

const Contextapi = (props) => {
  return (
    <div>
      <Navbar theme={props.theme} />
    </div>
  );
};

export default Contextapi;
