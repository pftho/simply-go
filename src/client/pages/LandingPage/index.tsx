import { Spin, Typography } from "antd";
import CoverImage from "../../components/organisms/CoverImage";
import TripList from "../../components/organisms/TripList";
import { useTripsQuery } from "../../services/trips/actions";
import FeaturesSection from "./LandingPageFeaturesSection";
import "./styles.css";

function LandingPage() {
  const { data: trips, isLoading } = useTripsQuery();
  const { Title } = Typography;

  const imageUrl =
    "https://images.unsplash.com/photo-1486571698588-a2204703bec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80";

  if (isLoading) {
    return (
      <div className="spinDiv">
        <Spin />
      </div>
    );
  }
  return (
    <>
      <CoverImage
        imageUrl={imageUrl}
        title={"Welcome to Simply Go"}
        tagline={"Leave your travel plan to us and just relax."}
      />

      <FeaturesSection />

      <Title className="tripListTitle headerLevel2" level={2}>
        Here are some examples
      </Title>

      <TripList trips={trips} />
    </>
  );
}

export default LandingPage;
