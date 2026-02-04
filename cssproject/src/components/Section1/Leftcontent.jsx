import React from "react";
import { ArrowUpRight } from "lucide-react";

const Leftcontent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-5xl font-bold mb-7 leading-tight">
          Prospective <br />
          <span className="text-gray-700">Customer </span>
          <br />
          segmentataion
        </h3>
        <p className="text-md font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          error harum amet magni! Amet, ex?
        </p>
      </div>
      <div>
        <ArrowUpRight size={70} />
      </div>
    </div>
  );
};

export default Leftcontent;
