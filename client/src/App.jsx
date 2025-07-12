import React from "react";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DisplayCard from "./components/DisplayCard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:input" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
