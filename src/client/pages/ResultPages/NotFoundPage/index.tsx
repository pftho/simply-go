import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./../style.css";

const NotFoundPage = () => {
  return (
    <div className="containerStyle">
      <Result
        status="404"
        title="404"
        subTitle="Oops! The page you are looking for does not exist."
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

export default NotFoundPage;
