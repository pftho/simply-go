import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./../style.css";

const ErrorPage = () => {
  return (
    <div className="containerStyle">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        className="resultStyle"
        extra={
          <Link to="/">
            <Button type="primary" className="buttonStyle">
              Back to Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default ErrorPage;
