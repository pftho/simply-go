import { Anchor, Button, Layout } from "antd";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Link } = Anchor;

function TripDetailsPageSider({
  isUserTripOwner,
  tripId,
}: {
  isUserTripOwner: boolean;
  tripId: string;
}) {
  const navigate = useNavigate();

  return (
    <Sider className="sider" width={200}>
      {isUserTripOwner && (
        <>
          <Button
            type="primary"
            onClick={() => navigate(`/trips/edit/${tripId}`)}
            className="editDeleteBtn"
          >
            Edit
          </Button>
          <Button className="editDeleteBtn">Delete</Button>
        </>
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
