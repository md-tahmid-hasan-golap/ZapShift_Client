import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import Coverage from "../Components/Coverage";
import AboutUs from "../Components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
    ],
  },
]);

export default router;
