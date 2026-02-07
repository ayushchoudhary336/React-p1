import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-green-900 h-16">
      <h3 className="px-5 text-2xl font-semibold">Magician</h3>
      <div className="flex px-5 gap-5">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
      </div>
    </div>
  );
};

export default Navbar;
