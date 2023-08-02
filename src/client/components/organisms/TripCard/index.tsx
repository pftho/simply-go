import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function TripCard({
  tripImage,
  tripName,
  tripHolidayTimeframe,
  tripId,
}: {
  tripImage?: string;
  tripName: string;
  tripHolidayTimeframe: string;
  tripId: string;
}) {
  const { Meta } = Card;
  const navigate = useNavigate();
  const defaultImage =
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80";
  const handleClick = () => {
    navigate(`/trips/${tripId}`);
  };

  return (
    <Card
      onClick={handleClick}
      hoverable
      className="tripCard"
      cover={<img src={tripImage || defaultImage} />}
    >
      <Meta title={tripName} description={tripHolidayTimeframe} />
    </Card>
  );
}

export default TripCard;
