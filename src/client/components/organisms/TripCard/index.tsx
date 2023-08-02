import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function TripCard({
  tripImage,
  tripName,
  tripHolidayTimeframe,
  tripId,
}: {
  tripImage: string;
  tripName: string;
  tripHolidayTimeframe: string;
  tripId: string;
}) {
  const { Meta } = Card;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trips/${tripId}`);
  };

  return (
    <Card
      onClick={handleClick}
      hoverable
      className="tripCard"
      cover={<img src={tripImage} />}
    >
      <Meta title={tripName} description={tripHolidayTimeframe} />
    </Card>
  );
}

export default TripCard;
