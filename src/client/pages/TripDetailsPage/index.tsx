import {
  EuroCircleOutlined,
  EyeOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, Spin, Typography } from "antd";
import CoverImage from "../../components/organisms/CoverImage";
import { useTripQuery } from "../../services/trips/actions";
import "./styles.css";
import { useParams } from "react-router-dom";
import ActivityCard from "../../components/organisms/ActivityCard";

const { Sider, Content } = Layout;
const { Title } = Typography;

function TripDetailsPage() {
  const { id } = useParams();
  const { data: trip, isLoading } = useTripQuery(id);

  const imageUrl = "/test";

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="sider">
        <Menu
          mode="inline"
          defaultSelectedKeys={["Description"]}
          className="menu"
        >
          <Menu.Item key="description" icon={<ZoomInOutlined />}>
            Description
          </Menu.Item>
          <Menu.Item key="activities" icon={<EyeOutlined />}>
            Activities
          </Menu.Item>
          <Menu.Item key="Budget" icon={<EuroCircleOutlined />}>
            Budget
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <CoverImage imageUrl={imageUrl} title={`Explore ${trip?.name}`} />
        <Content className="contentTripDetailsContainer">
          <div className="contentTripDetailsDiv">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={2}> Description</Title>
                {trip?.description}
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={2}>Activities</Title>
                {trip?.activities?.length ? (
                  trip.activities.map((tripActivity) => (
                    <ActivityCard {...tripActivity} />
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
                <Title level={2}>Budget</Title>
                <Typography>{trip?.recommandedBudget} Euros</Typography>
              </Col>
            </Row>
            {/* Add more sections as needed */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default TripDetailsPage;
