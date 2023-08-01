import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./reactQuery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentWrapper from "./components/templates/ContentWrapper";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProflePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import "./reset.css";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFound />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
        errorElement: <NotFound />,
      },
      {
        path: "auth/register",
        element: <RegisterPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/trips",
        element: <HomePage />,
        errorElement: <NotFound />,
      },
      {
        path: "/trips/:id",
        element: <TripDetailsPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/trips/create",
        element: <CreateTripPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/user/:id",
        element: <ProfilePage />,
        errorElement: <NotFound />,
      },
      {
        path: "/user/edit/:id",
        element: <ProfilePage />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
