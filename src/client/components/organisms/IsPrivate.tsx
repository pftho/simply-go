import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { Spin } from "antd";

function IsPrivate({ children }: { children: JSX.Element }) {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return <Spin />;

  if (!isLoggedIn) {
    return <Navigate to="/page-not-found" />;
  } else {
    return children;
  }
}

export default IsPrivate;
