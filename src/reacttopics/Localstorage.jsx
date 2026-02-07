import React from "react";

const Localstorage = () => {
  const user = {
    name: "Ayush",
    age: 19,
    city: "Greater Noida",
    Degree: "B.TECH",
  };

  // localstorage.setItem('user', JSON.stringify(user))  hence localstorage want their value in a key value string format

  const data = JSON.parse(localStorage.getItem("user"));

  // if we want data in object form so we can access each element we have to first parsed them by ussing JSON.parse

  return (
    <div>
      <h1>local hu bhai</h1>
    </div>
  );
};

export default Localstorage;
