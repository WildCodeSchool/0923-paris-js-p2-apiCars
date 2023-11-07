import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import ListCategory from "./pages/ListCategory/ListCategory";
import Inscription from "./pages/Inscription/Inscription";
import CarPage from "./pages/CarPage/CarPage";
import Reservation from "./pages/Reservation/Reservation";
import ListModelSearch from "./pages/ListModelSearch/ListModelSearch";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/list-category",
    element: <ListCategory />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/car-page",
    element: <CarPage />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/list-model-search",
    element: <ListModelSearch />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
