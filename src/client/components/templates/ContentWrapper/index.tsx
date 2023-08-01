import {
  LoginOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Spin } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth.context";

const { Header, Content, Footer } = Layout;

const ContentWrapper = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn, user, logout } = useAuth();

  if (!user) {
    return <Spin />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {isLoggedIn ? (
            <>
              <Menu.Item key="trips" icon={<SearchOutlined />}>
                <Link to="/trips">Explore</Link>
              </Menu.Item>
              <Menu.Item key="createTrip" icon={<PlusCircleOutlined />}>
                <Link to="/trips/create">Plan a trip</Link>
              </Menu.Item>
              <Menu.Item key="userProfile" icon={<UserOutlined />}>
                <Link to={`/user/${user._id}`}>My profile</Link>
              </Menu.Item>
              <Menu.Item
                key="logout"
                onClick={logout}
                icon={<LogoutOutlined />}
              >
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="register" icon={<UserAddOutlined />}>
                <Link to="/auth/register">Register</Link>
              </Menu.Item>
              <Menu.Item key="login" onClick={logout} icon={<LoginOutlined />}>
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
