import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18 text-sm">
      <h4 className="bg-black text-white px-5 py-3 rounded-full uppercase">
        Target audience
      </h4>
      <button className="bg-gray-200 px-6 py-2 uppercase rounded-full text-sm">
        digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
