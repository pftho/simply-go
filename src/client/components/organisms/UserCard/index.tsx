import { Avatar, Button, Layout, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { User } from "../../../types/user/types";
import "./styles.css";

const UserProfile = ({ user }: { user: User }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" width={200} className="siderUserProfile">
        <Button className="userProfileBtn">Edit Profile</Button>
        <Button className="userProfileBtn">My Trips</Button>
      </Sider>
      <Layout>
        <Content className="userProfileContent">
          <Avatar size={64} icon="user" />
          <div className="userProfileInfoDiv">
            <Typography.Title level={2}>{user.username}</Typography.Title>
            <Typography.Text>Email: {user.email}</Typography.Text>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserProfile;
