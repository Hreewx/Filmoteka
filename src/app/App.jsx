import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../widgets/AppLayout/AppLayout";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

import "./styles/index.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
