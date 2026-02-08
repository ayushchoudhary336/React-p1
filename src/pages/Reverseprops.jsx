import React from "react";

const Reverseprops = (props) => {
  return (
    <div>
      {/* <p className="m-3 text-3xl">{props.theme}</p> */}
      <button
        onClick={() => {
          props.settheme("Dark");
        }}
        className="bg-gray-800 px-3 py-1 mx-3 mt-5"
      >
        change theme
      </button>
    </div>
  );
};

export default Reverseprops;
