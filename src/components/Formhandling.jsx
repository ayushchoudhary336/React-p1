import React, { useState } from "react";

const Formhandling = () => {
  const [title, settitle] = useState("");
  let submithandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by : " + title);
    settitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(elem) => {
            settitle(elem.target.value);
          }}
        />
        <br />
        {/* <input type="text" placeholder="enter your email address" />
        <br /> */}
        <button> submit</button>
      </form>
    </div>
  );
};

export default Formhandling;
