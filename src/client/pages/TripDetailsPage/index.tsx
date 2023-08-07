import { Col, Empty, Layout, Row, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import CoverImage from "../../components/organisms/CoverImage";
import { useAuth } from "../../context/auth.context";
import { useTripQuery } from "../../services/trips/actions";
import ActivityCard from "./ActivityCard";
import TripDetailsPageSider from "./TripDetailsPageSider";
import "./styles.scss";

function TripDetailsPage() {
  const { id } = useParams();
  const { data: trip, isLoading } = useTripQuery(id);
  const { user } = useAuth();

  const { Content } = Layout;
  const { Title } = Typography;

  const imageUrl =
    trip?.imageUrl ||
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80";

  if (isLoading) {
    return (
      <div className="spinDiv">
        <Spin />
      </div>
    );
  }

  return (
    <>
      <CoverImage imageUrl={imageUrl} title={`Explore ${trip?.name}`} />

      <Layout className="layout">
        <div className="siderContainer">
          {trip && user && <TripDetailsPageSider trip={trip} user={user} />}
        </div>
        <Layout>
          <Content className="contentTripDetailsContainer">
            <div className="contentTripDetailsDiv">
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Title className="headerLevel2" id="description" level={2}>
                    Description
                  </Title>
                  <Typography.Paragraph>
                    {trip?.description}
                  </Typography.Paragraph>
                </Col>
                <Col span={24}>
                  <Title className="headerLevel2" id="budget" level={2}>
                    Budget
                  </Title>
                  <Typography.Paragraph>
                    {trip?.recommendedBudget
                      ? `${trip?.recommendedBudget} Euros`
                      : "No budget yet"}
                  </Typography.Paragraph>
                </Col>
                <Col span={24}>
                  <Title className="headerLevel2" id="activities" level={2}>
                    Activities
                  </Title>
                  {trip?.activities?.length ? (
                    trip.activities.map((tripActivity) => (
                      <ActivityCard key={tripActivity._id} {...tripActivity} />
                    ))
                  ) : (
                    <Empty />
                  )}
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
