import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";
import AdminRoot from "../pages/admin/AdminRoot";
import Detail from "../pages/site/Detail/Detail";
import Error from "../pages/Error/Error";
import Add from "../pages/admin/Add/Add";
import Basket from "../pages/site/Basket/Basket";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "details/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path:"basket",
        element: <Basket/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add",
        element: <Add />,
      }
    ],
  },
];

export default ROUTES;
