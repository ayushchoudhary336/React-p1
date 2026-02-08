import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="mt-5 mb-6">
      <div className="flex justify-center items-center font-bold gap-3">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
