import { Col, Layout, Row, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import ActivityCard from "../../components/organisms/ActivityCard";
import CoverImage from "../../components/organisms/CoverImage";
import { useAuth } from "../../context/auth.context";
import { useTripQuery } from "../../services/trips/actions";
import "./styles.scss";
import TripDetailsPageSider from "./TripDetailsPageSider";

const { Content } = Layout;
const { Title } = Typography;

function TripDetailsPage() {
  const { id } = useParams();
  const { data: trip, isLoading } = useTripQuery(id);
  const { user } = useAuth();
  const isUserTripOwner = user?._id === trip?.owner._id;

  const imageUrl =
    trip?.imageUrl ||
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80";

  if (isLoading) {
    return <Spin />;
  }
  console.log(trip?._id);

  return (
    <>
      <CoverImage imageUrl={imageUrl} title={`Explore ${trip?.name}`} />

      <Layout className="layout">
        <div className="siderContainer">
          {trip && (
            <TripDetailsPageSider
              tripId={trip?._id}
              isUserTripOwner={isUserTripOwner}
            />
          )}
        </div>
        <Layout>
          <Content className="contentTripDetailsContainer">
            <div className="contentTripDetailsDiv">
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Title id="description" level={2}>
                    Description
                  </Title>
                  {trip?.description}
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Title id="activities" level={2}>
                    Activities
                  </Title>
                  {trip?.activities?.length ? (
                    trip.activities.map((tripActivity) => (
                      <ActivityCard key={tripActivity._id} {...tripActivity} />
                    ))
                  ) : (
                    <>
                      <Typography>No activities yet</Typography>
                    </>
                  )}
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Title id="budget" level={2}>
                    Budget
                  </Title>
                  <Typography>{trip?.recommandedBudget} Euros</Typography>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default TripDetailsPage;
