import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[15vw] h-60 relative bg-white rounded mb-1">
      <div className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            autoPlay
            className="h-full w-full object-cover object-center"
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </div>

      <div
        id="bottom"
        className=" h-[30%] px-6 py-10 w-full text-white absolute bottom-0"
      >
        {" "}
        <h2 className=" font-medium capitalize"> {item.title}</h2>
      </div>
    </div>
  );
};

export default ResultCard;
