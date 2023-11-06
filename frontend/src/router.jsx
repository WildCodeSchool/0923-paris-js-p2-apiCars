import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CarPage from "./pages/CarPage/CarPage";
import Inscription from "./pages/inscription/Inscription";
import Reservation from "./pages/reservation/Reservation";
import ListCategory from "./pages/ListCategory/ListCategory";
import ListModelSearch from "./pages/ListModelSearch/ListModelSearch";
import App from "./App";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pages/Home" element={<Home />} />
      <Route path="/pages/ListCategory" element={<ListCategory />} />
      <Route path="/pages/Inscription" element={<Inscription />} />
      <Route path="/pages/CarPage" element={<CarPage />} />
      <Route path="/pages/Reservation" element={<Reservation />} />
      <Route path="/pages/ListModelSearch" element={<ListModelSearch />} />
    </Routes>
  );
}

export default Router;
