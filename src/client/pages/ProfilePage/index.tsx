import { Anchor, Button, Col, Layout, Row, Spin, Typography } from "antd";
import CoverImage from "../../components/organisms/CoverImage";
import UserProfile from "../../components/organisms/UserCard";
import { useAuth } from "../../context/auth.context";
import { useTripsQuery } from "../../services/trips/actions";
import TripCard from "../../components/organisms/TripCard";
import { Trip } from "../../types/trip/types";
import Sider from "antd/es/layout/Sider";

function ProfilePage() {
  const { user } = useAuth();
  const { data: trips } = useTripsQuery();

  const { Content } = Layout;
  const { Title } = Typography;
  const { Link } = Anchor;

  const imageUrl =
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80";

  const userTrips = trips?.filter((trip) => trip.owner._id === user?._id);

  return (
    <>
      {user ? (
        <>
          <CoverImage imageUrl={imageUrl} title={"My Profile"} />
          <Layout style={{ minHeight: "100vh" }}>
            <Sider theme="light" width={200} className="siderUserProfile">
              <Button type="primary" className="userProfileBtn">
                Edit Profile
              </Button>
              <Anchor targetOffset={64} affix showInkInFixed>
                <Link href="#description" title="Description" />
                <Link href="#userTrips" title="My Trips" />
              </Anchor>
            </Sider>
            <Layout>
              <Content className="contentTripDetailsContainer">
                <div className="contentTripDetailsDiv">
                  <Title id="profile" level={2}>
                    My Profile
                  </Title>
                  <UserProfile user={user} />
                  <Title id="userTrips" level={2}>
                    My Trips
                  </Title>
                  <Row gutter={[16, 16]}>
                    {userTrips ? (
                      userTrips?.map((trip: Trip) => {
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
                      <Typography> "No trips yet</Typography>
                    )}
                  </Row>
                </div>
              </Content>
            </Layout>
          </Layout>
        </>
      ) : (
        <Spin />
      )}
    </>
  );
}
export default ProfilePage;
