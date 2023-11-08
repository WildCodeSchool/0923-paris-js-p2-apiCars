/*
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import ListCategory from "./pages/ListCategory/ListCategory";
import ListModelSearch from "./pages/ListModelSearch/ListModelSearch";
import Reservation from "./pages/reservation/Reservation";
import CarPage from "./pages/CarPage/CarPage";
import Inscription from "./pages/Inscription/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Inscription",
    element: <Inscription />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/ListCategory",
    element: <ListCategory />,
  },
  {
    path: "/ListModelSearch",
    element: <ListModelSearch />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/CarPage",
    element: <CarPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
