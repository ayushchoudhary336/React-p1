import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white w-full">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
