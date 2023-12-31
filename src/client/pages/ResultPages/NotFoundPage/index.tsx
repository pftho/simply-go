import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth.context";
import "./../style.css";

const NotFoundPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="containerStyle">
      <Result
        status="404"
        title="404"
        subTitle="Oops! The page you are looking for does not exist."
        className="resultStyle"
        extra={
          isLoggedIn ? (
            <Link to="/trips">
              <Button type="primary" className="buttonStyle">
                Back to Home
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button type="primary" className="buttonStyle">
                Back to Home
              </Button>
            </Link>
          )
        }
      />
    </div>
  );
};

export default NotFoundPage;
