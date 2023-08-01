import { Card, Avatar, Typography } from "antd";
import { User } from "../../../types/user/types";

const UserProfile = ({ user }: { user: User }) => {
  const { Title } = Typography;

  return (
    <div>
      <Card>
        <Avatar size={64} icon="user" />
        <Title level={2}>{user.username}</Title>
        <Typography>Email: {user.email}</Typography>
      </Card>
    </div>
  );
};

export default UserProfile;
