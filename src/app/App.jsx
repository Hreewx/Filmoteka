import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../widgets/AppLayout/AppLayout";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

import "./styles/index.scss";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/registration",
        element: <Registration />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
