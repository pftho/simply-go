import { Anchor, Col, Layout, Row, Spin, Typography } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ActivityCard from "../../components/organisms/ActivityCard";
import CoverImage from "../../components/organisms/CoverImage";
import { useTripQuery } from "../../services/trips/actions";
import "./styles.css";

const { Sider, Content } = Layout;
const { Title } = Typography;
const { Link } = Anchor;

function TripDetailsPage() {
  const { id } = useParams();
  const { data: trip, isLoading } = useTripQuery(id);

  const imageUrl = "/test";

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="siderContainer">
        <Sider className="sider" width={200}>
          <Anchor targetOffset={64} affix showInkInFixed className="anchor">
            <Link href="#description" title="Description" />
            <Link href="#activities" title="Activities" />
            <Link href="#budget" title="Budget" />
          </Anchor>
        </Sider>
      </div>
      <Layout>
        <CoverImage imageUrl={imageUrl} title={`Explore ${trip?.name}`} />
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
  );
}

export default TripDetailsPage;
