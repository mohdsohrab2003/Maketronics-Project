import React from "react";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DisplayCard from "./components/DisplayCard";

const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/search/:input" element={<DisplayCard />} />
      </Routes>
    </>
  );
};

export default App;
