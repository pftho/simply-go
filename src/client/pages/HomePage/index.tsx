import { Col, Row } from "antd";
import { useAuth } from "../../context/auth.context";
import "./styles.css";
import TripCard from "../../components/organisms/TripCard";
import { trips } from "../../types/trip/enums";
import { Trip } from "../../types/trip/types";
import CoverImage from "../../components/organisms/CoverImage";
import SearchBar from "../../components/organisms/SearchBar";

function HomePage() {
  const { user } = useAuth();
  const imageUrl =
    "https://images.unsplash.com/photo-1486571698588-a2204703bec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";

  return (
    <>
      <CoverImage imageUrl={imageUrl} title={"Explore"} />
      <div className="searchBarContainer">
        <SearchBar trips={trips} />
      </div>
      <div className="tripListContainer">
        <Row gutter={[16, 16]}>
          {trips.map((trip: Trip) => {
            return (
              <Col key={trip.id}>
                <TripCard
                  tripImage={trip.imageUrl}
                  tripName={trip.name}
                  tripHolidayTimeframe={trip.holidayTimeframe}
                  tripId={trip.id}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
export default HomePage;
