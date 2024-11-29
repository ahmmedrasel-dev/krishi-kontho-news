import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import { getNewsLoader } from "../loaders/getNewsLoader";
import { getSingleNewsLoader } from "../loaders/getSingleNews";
import NotFound from "../pages/Error/NotFound";
import Home from "../pages/Home/Home";
import SingleNews from "../pages/SingleNews/SingleNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: getNewsLoader,
        element: <Home />,
      },
      {
        path: "/news/:slug",
        loader: getSingleNewsLoader,
        element: <SingleNews />,
      },
    ],
  },
]);

export default router;
