import { Spin } from "antd";
import CoverImage from "../../components/organisms/CoverImage";
import SearchBar from "../../components/organisms/SearchBar";
import TripList from "../../components/organisms/TripList";
import { useTripsQuery } from "../../services/trips/actions";
import "./styles.css";

function HomePage() {
  const { data: trips, isLoading } = useTripsQuery();
  const imageUrl =
    "https://images.unsplash.com/photo-1486571698588-a2204703bec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <CoverImage imageUrl={imageUrl} title={"Explore"} />
      {trips?.length && (
        <div className="searchBarAndListContainer">
          <SearchBar trips={trips} />
          <div className="tripListDiv">
            <TripList trips={trips} />
          </div>
        </div>
      )}
    </>
  );
}
export default HomePage;
