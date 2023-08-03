import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./../style.css";
import { useAuth } from "../../../context/auth.context";

const ErrorPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="containerStyle">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
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

export default ErrorPage;
