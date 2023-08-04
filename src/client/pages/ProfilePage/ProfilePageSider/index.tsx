import { Anchor, Button, Layout, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import "./style.scss";

function ProfilePageSider() {
  const { Link } = Anchor;

  return (
    <Sider theme="light" width={200} className="siderUserProfile">
      <Button type="primary" className="userProfileEditBtn">
        Edit Profile
      </Button>
      <Anchor targetOffset={64} affix showInkInFixed>
        <Link href="#description" title="Description" />
        <Link href="#userTrips" title="My Trips" />
      </Anchor>
    </Sider>
  );
}
export default ProfilePageSider;
