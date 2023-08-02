import { Row, Col, Card, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import "./styles.css";

const FeaturesSection = () => {
  const { Title } = Typography;

  return (
    <div className="FeatureSectionContainer">
      <Title className="FeatureSectionTitle" level={2}>
        What we offer
      </Title>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} md={8}>
          <Card
            className="featureCard"
            title="Create Your Own Trips"
            cover={<PlusOutlined className="featureIcon" />}
          >
            <Typography>
              Easily create and plan your own trips with our user-friendly
              interface.
            </Typography>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Access Already Planned Trips"
            className="featureCard"
            cover={<SearchOutlined className="featureIcon" />}
          >
            <Typography>
              Explore a wide range of pre-planned trips created by other users.
            </Typography>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            className="featureCard"
            title="Easily Access Your Plan When Traveling"
            cover={<CarryOutOutlined className="featureIcon" />}
          >
            <Typography>
              Access your trip plans on-the-go, ensuring a smooth and enjoyable
              journey.
            </Typography>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesSection;
