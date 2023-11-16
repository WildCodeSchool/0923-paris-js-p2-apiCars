import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inscription from "./pages/Inscription/Inscription";
import ListCategory from "./pages/ListCategory/ListCategory";
import ListModelSearch from "./pages/ListModelSearch/ListModelSearch";
import Reservation from "./pages/Reservation/Reservation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/ListCategory" element={<ListCategory />} />
        <Route path="/ListModelSearch" element={<ListModelSearch />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}
export default App;
