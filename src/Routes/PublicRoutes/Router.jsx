import { createBrowserRouter } from "react-router";
import Root from "../../Layouts/Root/Root";
import Home from "../../Pages/Home";
import App from "../../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        Component: App,
      },
    ],
  },
]);
