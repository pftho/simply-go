import { Route, Routes } from "react-router-dom";
import ContentWrapper from "./components/templates/ContentWrapper";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import HomePage from "./pages/HomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreateTripPage from "./pages/CreateTripPage";
import ProfilePage from "./pages/ProflePage";

function Router() {
  const renderContentWrapper = (pageComponent: JSX.Element) => (
    <ContentWrapper>{pageComponent}</ContentWrapper>
  );

  return (
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={renderContentWrapper(<LandingPage />)} />
        <Route
          path="auth/login"
          element={renderContentWrapper(<LoginPage />)}
        />
        <Route
          path="auth/register"
          element={renderContentWrapper(<RegisterPage />)}
        />
        <Route path="/trips" element={renderContentWrapper(<HomePage />)} />
        <Route
          path="/trips/:id"
          element={renderContentWrapper(<TripDetailsPage />)}
        />
        <Route
          path="/trips/create"
          element={renderContentWrapper(<CreateTripPage />)}
        />
        <Route
          path="/user/:id"
          element={renderContentWrapper(<ProfilePage />)}
        />
        <Route
          path="/user/:id/edit"
          element={renderContentWrapper(<ProfilePage />)}
        />
      </Routes>
    </div>
  );
}

export default Router;
