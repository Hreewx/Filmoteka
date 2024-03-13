import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import "./styles/index.scss";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../widgets/AppLayout/AppLayout";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import CreateGroup from "../pages/CreateGroup";
import Profile from "../pages/Profile";
import GroupInfo from "../pages/GroupInfo";
import Statistics from "../pages/Statistics";
import Links from "../pages/Links";
import NewReview from "../pages/NewReview";
import Suggestions from "../pages/Suggestions";
import Movie from "../pages/Movie";
import ReviewPage from "../pages/ReviewPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
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
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/links",
        element: <Links />,
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
        path: "/dashboard/creategroup",
        element: <CreateGroup />,
      },

      {
        path: "/dashboard/:groupId",
        element: <GroupInfo />,
      },

      {
        path: "/dashboard/:groupId/new-review",
        element: <NewReview />,
      },

      {
        path: "/dashboard/:groupId/statistics",
        element: <Statistics />,
      },

      {
        path: "/dashboard/:groupId/suggestions",
        element: <Suggestions />,
      },

      {
        path: "/dashboard/:groupId/review/:reviewId",
        element: <ReviewPage />,
      },

      {
        path: "/movie/:movieId",
        element: <Movie />,
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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8vh" }}
        toastOptions={{
          success: {
            duration: 4000,
            iconTheme: {
              primary: "#047453",
              secondary: "#f7f6f8",
            },
          },
          error: {
            duration: 4000,
            iconTheme: { primary: "#df0237", secondary: "#f7f6f8" },
          },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            border: "1px solid #8c3be5",
            color: "#f7f6f8",
            backgroundColor: "#212121",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
