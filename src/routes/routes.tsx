import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SmallNav from "../layouts/SmallNav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
