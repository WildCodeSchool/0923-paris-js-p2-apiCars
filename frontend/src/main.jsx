
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import ListCategory from "./pages/ListCategory/ListCategory";
import Inscription from "./pages/Inscription/Inscription";
import CarPage from "./pages/CarPage/CarPage";
import Reservation from "./pages/Reservation/Reservation";
import ListModelSearch from "./pages/ListModelSearch/ListModelSearch";


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


