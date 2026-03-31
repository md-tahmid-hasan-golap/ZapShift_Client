import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <h2>This is Home</h2>,
      },
    ],
  },
]);

export default router;
