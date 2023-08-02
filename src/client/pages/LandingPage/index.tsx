import { Col, Row, Spin, Typography } from "antd";
import { useTripsQuery } from "../../services/trips/actions";
import CoverImage from "../../components/organisms/CoverImage";
import TripCard from "../../components/organisms/TripCard";
import { Trip } from "../../types/trip/types";
import "./styles.css";

function LandingPage() {
  const { data: trips, isLoading } = useTripsQuery();

  const imageUrl =
    "https://images.unsplash.com/photo-1486571698588-a2204703bec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";

  if (isLoading) {
    return <Spin />;
  }
  return (
    <>
      <CoverImage
        imageUrl={imageUrl}
        title={"Welcome to Simply Go"}
        tagline={"we store your travel plan so you can relax and Simply relax"}
      />
      {trips?.length && (
        <Row className="tripListContainer" gutter={[16, 16]}>
          {trips?.map((trip: Trip) => {
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
          })}
        </Row>
      )}
    </>
  );
}

export default LandingPage;
