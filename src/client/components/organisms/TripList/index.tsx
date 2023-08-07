import { Col, Empty, Row } from "antd";
import { Trip } from "../../../types/trip/types";
import TripCard from "../TripCard";
import "./styles.css";

function TripList({ trips }: { trips?: Trip[] }) {
  return (
    <Row className="tripListDiv" gutter={[16, 16]}>
      {trips?.length ? (
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
        <Empty />
      )}
    </Row>
  );
}
export default TripList;
