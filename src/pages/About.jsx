import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="m-10">
      <h1>ayush name hai bhai ....</h1>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-green-500 px-3 py-1 rounded mt-2 cursor-pointer active:scale-95 mx-5"
        >
          Go Home
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-green-500 px-2 py-1 rounded mt-2 cursor-pointer active:scale-95"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default About;
