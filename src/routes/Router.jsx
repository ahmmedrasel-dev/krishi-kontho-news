import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
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
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <SingleNews />,
      },
    ],
  },
]);

export default router;
