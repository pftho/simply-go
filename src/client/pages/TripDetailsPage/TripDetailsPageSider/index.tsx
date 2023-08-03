import { Anchor, Button, Layout, message } from "antd";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useDeleteTripMutation } from "../../../services/trips/actions";
import queryClient from "../../../reactQuery";
import { Trip } from "../../../types/trip/types";
import { User } from "../../../types/user/types";

const { Sider } = Layout;
const { Link } = Anchor;

function TripDetailsPageSider({ user, trip }: { user: User; trip: Trip }) {
  const navigate = useNavigate();
  const deleteTripMutation = useDeleteTripMutation();
  const isUserTripOwner = user?._id === trip?.owner._id;

  const handleDelete = async (tripId: string) => {
    try {
      await deleteTripMutation.mutateAsync(tripId);
      queryClient.invalidateQueries({
        queryKey: [user?._id || "unlogged", "trips"],
      });
      queryClient.invalidateQueries({
        queryKey: [user?._id || "unlogged", "trip", trip._id.toString()],
      });
      navigate(`/trips`);
    } catch (error) {
      message.error(
        "Error occurred while deleting the trip. Please try again."
      );
    }
  };

  return (
    <Sider className="sider" width={200}>
      {isUserTripOwner && (
        <>
          <Button
            type="primary"
            onClick={() => navigate(`/trips/edit/${trip._id}`)}
            className="editDeleteBtn"
          >
            Edit
          </Button>
          <Button
            className="editDeleteBtn"
            onClick={() => handleDelete(trip._id)}
          >
            Delete
          </Button>
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
