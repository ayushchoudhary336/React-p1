import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Product from "../pages/Product";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Collection from "../pages/Collection";
import Courses from "../pages/Courses";

const Reactrouting = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default Reactrouting;
