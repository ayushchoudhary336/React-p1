import React, { useState } from "react";
import axios from "axios";

const Apicalling = () => {
  const [data, setdata] = useState([]);
  let getdata = async () => {
    // axios method
    const response = await axios.get("https://picsum.photos/v2/list");

    // fetch method
    // let response = await fetch(
    //   "https://official-joke-api.appspot.com/random_joke",
    // );

    setdata(response.data);
  };

  return (
    <div>
      <button
        onClick={getdata}
        className="bg-gray-600 text-white px-2 py-1 rounded-2xl"
      >
        Get data
      </button>

      <div className="text-white">
        {data.map(function (elem, idx) {
          return (
            <h3 key={idx}>
              hello {elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Apicalling;
