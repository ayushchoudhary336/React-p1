import React, { useEffect, useState } from "react";
import axios from "axios";

const Useeffect = () => {
  const [num, setnum] = useState(0);

  // useEffect(
  //   function () {
  //     console.log("use effect is running .....");
  //   },
  //   [num],
  // );

  // api calling by using useEffect and axios
  useEffect(() => {
    const collection = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list");
        console.log(response.data);
      } catch (error) {
        console.log("error fetching data : ", error);
      }
    };

    collection();
  }, []);
  return (
    <div>
      <h1 className="text-4xl">{num}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Useeffect;
