import { Route, Routes } from "react-router-dom";
import IsPrivate from "./components/organisms/IsPrivate";
import ContentWrapper from "./components/templates/ContentWrapper";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import CreateTripPage from "./pages/CreateTripPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProflePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import LandingPage from "./pages/LandingPage";

function Router() {
  const renderContentWrapper = (pageComponent: JSX.Element) => (
    <ContentWrapper>{pageComponent}</ContentWrapper>
  );

  return (
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path={"/page-not-found"} element={<NotFound />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path="/" element={renderContentWrapper(<LandingPage />)} />
        <Route
          path="auth/login"
          element={renderContentWrapper(<LoginPage />)}
        />
        <Route
          path="auth/register"
          element={renderContentWrapper(<RegisterPage />)}
        />
        <Route
          path="/trips"
          element={
            <IsPrivate>
              <ContentWrapper>
                <HomePage />
              </ContentWrapper>
            </IsPrivate>
          }
        />
        <Route
          path="/trips/:id"
          element={renderContentWrapper(<TripDetailsPage />)}
        />
        <Route
          path="/trips/create"
          element={
            <IsPrivate>
              <ContentWrapper>
                <CreateTripPage />
              </ContentWrapper>
            </IsPrivate>
          }
        />
        <Route
          path="/user/:id"
          element={
            <IsPrivate>
              <ContentWrapper>
                <ProfilePage />
              </ContentWrapper>
            </IsPrivate>
          }
        />
        <Route
          path="/user/:id/edit"
          element={
            <IsPrivate>
              <ContentWrapper>
                <ProfilePage />
              </ContentWrapper>
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default Router;
