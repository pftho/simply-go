import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { items } from "./formatters";
import { AuthProviderWrapper } from "../../../context/auth.context";

const { Header, Content, Footer } = Layout;

const ContentWrapper = () => {
  return (
    <AuthProviderWrapper>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Pauline Thomas ©2023</Footer>
      </Layout>
    </AuthProviderWrapper>
  );
};

export default ContentWrapper;
