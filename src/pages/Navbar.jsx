import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { themedatacontext } from "../context/Themecontext";

const Navbar = (props) => {
  const data = useContext(themedatacontext);
  console.log(data);

  return (
    <div className="flex justify-between items-center bg-cyan-700 h-16">
      <h3 className="px-5 text-2xl font-semibold">Magician</h3>
      <div className="flex px-5 gap-5 font-bold">
        <Link className="active:bg-blue-800 px-2 py-1" to="/">
          Home{" "}
        </Link>
        <Link className="active:bg-blue-800 px-2 py-1" to="/contact">
          Contact{" "}
        </Link>
        <Link className="active:bg-blue-800 px-2 py-1" to="/about">
          About{" "}
        </Link>
        <Link
          className=" hidden md:block active:bg-blue-800 px-2 py-1"
          to="/about"
        >
          {data}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
