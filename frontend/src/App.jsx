import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inscription from "./pages/Inscription/Inscription";
import ListCategory from "./pages/ListCategory/ListCategory";
import ListModelSearch from "./pages/ListModelSearch/ListModelSearch";
import Reservation from "./pages/Reservation/Reservation";
import CarPage from "./pages/CarPage/CarPage";
import Login from "./pages/Login/Login";

function App() {
  // penser a déclarer les componants essentiels ici pour avoir à se repeter
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/ListCategory" element={<ListCategory />} />
        <Route path="/CarPage" element={<CarPage />} />
        <Route path="/ListModelSearch" element={<ListModelSearch />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
