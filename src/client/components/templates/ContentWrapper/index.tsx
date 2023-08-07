import {
  LoginOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/simply-go-logo.png";
import { useAuth } from "../../../context/auth.context";
import "./styles.scss";

const { Header, Content, Footer } = Layout;

const ContentWrapper = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    isLoggedIn ? navigate("/trips") : navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo">
          <img onClick={handleLogoClick} src={logo} alt="Logo" />
        </div>
        <Menu className="menu" mode="horizontal" defaultSelectedKeys={["2"]}>
          {isLoggedIn ? (
            <>
              <Menu.Item
                className="navItem"
                key="trips"
                icon={<SearchOutlined className="navItem" />}
              >
                <Link to="/trips">Explore</Link>
              </Menu.Item>
              <Menu.Item
                className="navItem"
                key="createTrip"
                icon={<PlusCircleOutlined className="navItem" />}
              >
                <Link to="/trips/create">Plan a trip</Link>
              </Menu.Item>
              <Menu.Item
                className="navItem"
                key="userProfile"
                icon={<UserOutlined className="navItem" />}
              >
                <Link to={`/user/${user?._id}`}>My profile</Link>
              </Menu.Item>
              <Menu.Item
                className="navItem"
                key="logout"
                onClick={logout}
                icon={<LogoutOutlined className="navItem" />}
              >
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                className="navItem"
                key="register"
                icon={<UserAddOutlined className="navItem" />}
              >
                <Link to="/auth/register">Register</Link>
              </Menu.Item>
              <Menu.Item
                className="navItem"
                key="login"
                onClick={logout}
                icon={<LoginOutlined className="navItem" />}
              >
                Login
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>Pauline Thomas ©2023</Footer>
    </Layout>
  );
};

export default ContentWrapper;
