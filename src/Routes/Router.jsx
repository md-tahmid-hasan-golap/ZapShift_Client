import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import Coverage from "../Components/Coverage";
import AboutUs from "../Components/AboutUs";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Errorpage from "../auth/Errorpage";
import PrivateRouter from "./PrivateRouter";
import BeARider from "../Components/BeARider";

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
      {
        path: "/beARider",
        element: (
          <PrivateRouter>
            <BeARider></BeARider>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: Errorpage,
  },
]);

export default router;
