import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SmallNav from "../layouts/SmallNav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
