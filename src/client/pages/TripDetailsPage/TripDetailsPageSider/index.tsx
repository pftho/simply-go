import { Anchor, Button, Layout } from "antd";
import "./styles.scss";

const { Sider } = Layout;
const { Link } = Anchor;

function TripDetailsPageSider({
  isUserTripOwner,
}: {
  isUserTripOwner: boolean;
}) {
  return (
    <Sider className="sider" width={200}>
      {isUserTripOwner && (
        <Button type="primary" className="editBtn">
          Edit
        </Button>
      )}
      <Anchor targetOffset={64} affix showInkInFixed>
        <Link href="#description" title="Description" />
        <Link href="#activities" title="Activities" />
        <Link href="#budget" title="Budget" />
      </Anchor>
    </Sider>
  );
}

export default TripDetailsPageSider;
