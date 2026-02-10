import React from "react";
import { useDispatch } from "react-redux";
import { setactivetab } from "../redux/features/searchslice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();
  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            onClick={() => {
              dispatch(setactivetab(elem));
            }}
            className="bg-gray-800 px-3 py-1 text-white cursor-pointer rounded"
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
