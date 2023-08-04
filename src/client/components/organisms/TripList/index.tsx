import { Col, Row, Typography } from "antd";
import { Trip } from "../../../types/trip/types";
import TripCard from "../TripCard";
import "./styles.css";

function TripList({ trips }: { trips?: Trip[] }) {
  return (
    <Row className="tripListDiv" gutter={[16, 16]}>
      {trips ? (
        trips?.map((trip: Trip) => {
          return (
            <Col key={trip._id}>
              <TripCard
                tripImage={trip.imageUrl ? trip.imageUrl : ""}
                tripName={trip.name}
                tripHolidayTimeframe={trip.holidayTimeframe}
                tripId={trip._id}
              />
            </Col>
          );
        })
      ) : (
        <Typography>No trips yet</Typography>
      )}
    </Row>
  );
}
export default TripList;
