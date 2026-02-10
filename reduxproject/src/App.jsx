import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="  bg-black h-screen text-white">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
