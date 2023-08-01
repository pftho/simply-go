import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import queryClient from "./reactQuery";
import "./reset.css";
import "./styles.css";
import Router from "./Router";
import ReactDOM from "react-dom";
import { AuthProviderWrapper } from "./context/auth.context";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <ContentWrapper />,
  //     errorElement: <NotFound />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <LandingPage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "auth/login",
  //         element: <LoginPage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "auth/register",
  //         element: <RegisterPage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "/trips",
  //         element: <HomePage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "/trips/:id",
  //         element: <TripDetailsPage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "/trips/create",
  //         element: <CreateTripPage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "/user/:id",
  //         element: <ProfilePage />,
  //         errorElement: <NotFound />,
  //       },
  //       {
  //         path: "/user/edit/:id",
  //         element: <ProfilePage />,
  //         errorElement: <NotFound />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProviderWrapper>
            <Router />
          </AuthProviderWrapper>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
