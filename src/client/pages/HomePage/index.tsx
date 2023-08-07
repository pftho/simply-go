import { Empty, Spin } from "antd";
import { useEffect, useState } from "react";
import CoverImage from "../../components/organisms/CoverImage";
import TripList from "../../components/organisms/TripList";
import { useTripsQuery } from "../../services/trips/actions";
import { Trip } from "../../types/trip/types";
import SearchBar from "./SearchBar";
import "./styles.css";

function HomePage() {
  const { data: trips, isLoading } = useTripsQuery();
  const [tripsTodisplay, setTripsToDisplay] = useState<Trip[]>([]);
  const imageUrl =
    "https://images.unsplash.com/photo-1486571698588-a2204703bec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";

  useEffect(() => {
    if (trips) {
      setTripsToDisplay(trips);
    }
  }, [trips]);

  if (isLoading) {
    return (
      <>
        <CoverImage imageUrl={imageUrl} title={"Explore"} />
        <div className="spinDiv">
          <Spin />
        </div>
      </>
    );
  }

  return (
    <>
      <CoverImage imageUrl={imageUrl} title={"Explore"} />
      {trips?.length ? (
        <div className="searchBarAndListContainer">
          <SearchBar setTripsToDisplay={setTripsToDisplay} trips={trips} />
          <div className="tripListDiv">
            {tripsTodisplay && <TripList trips={tripsTodisplay} />}
          </div>
        </div>
      ) : (
        <div>
          <Empty className="searchBarAndListContainer" />
        </div>
      )}
    </>
  );
}
export default HomePage;
