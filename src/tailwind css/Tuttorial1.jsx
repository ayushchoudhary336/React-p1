import React from "react";

const Tuttorial1 = () => {
  return (
    // <div className="bg-violet-200 border-2 border-violet-600 h-10 w-full rounded-md my-4 p-2">
    //   <h1 className="text-center font-mono font-extrabold text-[20px]">
    //     Hello world
    //   </h1>
    // </div>
    // <div className="grid grid-cols-5 gap-2 mt-2 mx-2">
    //   <div className="h-16  rounded-full bg-blue-500 "></div>
    //   <div className="h-16  rounded-full bg-orange-500 "></div>
    //   <div className="h-16  rounded-full bg-green-500 "></div>
    // </div>

    <div className=" text-white">
      <p>I appera on screen wider than 768px</p>
      <div>ayush choudhary</div>
      <div>choudhary</div>
      <div
        className="
bg-green-500
sm:bg-blue-500
md:bg-yellow-500
lg:bg-red-500
"
      >
        Hello
      </div>
    </div>
  );
};

export default Tuttorial1;
