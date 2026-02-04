import React from "react";
import { ArrowRight } from "lucide-react";

const Rightcardcontent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-80 rounded-4xl overflow-hidden relative shrink-0"
    >
      <img src={props.img} alt="img1" className="h-full w-full object-cover" />
      <div className="absolute top-0 left-0  h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center">
          {props.idx}
        </h2>
        <div>
          <p className=" text-shadow-2xs text-xl leading-normal mb-10 text-white">
            {props.intro}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              {props.tag}
            </button>
            <button className=" text-white font-medium px-3 py-2 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcardcontent;
