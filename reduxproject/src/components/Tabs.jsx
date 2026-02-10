import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setactivetab } from "../redux/features/searchslice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();
  const activetab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            onClick={() => {
              dispatch(setactivetab(elem));
            }}
            className={`${activetab == elem ? "bg-blue-700" : "bg-gray-500"} px-4 py-2 text-white cursor-pointer  transition rounded active:scale-95`}
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
