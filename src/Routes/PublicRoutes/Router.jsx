import { createBrowserRouter } from "react-router";
import Root from "../../Layouts/Root/Root";
import Home from "../../Pages/Home";
import CreateProduct from "../../Pages/CreateProduct";
import AllProducts from "../../Pages/AllProducts";
import MyProducts from "../../Pages/MyProducts";
import MyBids from "../../Pages/MyBids";

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
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/my-bids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/create-product",
        element: <CreateProduct></CreateProduct>,
      },
    ],
  },
]);
