import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setquery } from "../redux/features/searchslice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(setquery(text));
    settext("");
  };
  return (
    <div className="bg-black text-white">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex gap-4 bg-gray-700 p-8"
        action=""
      >
        <input
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          required
          className=" w-full bg-gray-800 text-white px-5 py-2  focus:outline-none  border-2 border-blue-800"
          type="text"
          placeholder="search anything ....."
        />
        <button className="px-5 py-2 bg-green-600 text-xl text-white active:scale-95 hover:border-2 border-green-900 cursor-pointer ">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
