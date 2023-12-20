import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

import "./config.scss";

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
