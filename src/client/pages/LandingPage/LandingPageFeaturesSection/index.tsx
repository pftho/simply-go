import { PlusOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import "./styles.css";

const FeaturesSection = () => {
  const { Title, Text } = Typography;

  return (
    <div className="FeatureSectionContainer">
      <Title className="FeatureSectionTitle headerLevel2" level={1}>
        What we offer
      </Title>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} md={8}>
          <Card
            className="featureCard"
            title={
              <Title className="headerLevel3" level={3}>
                Create
              </Title>
            }
            cover={<PlusOutlined className="featureIcon" />}
          >
            <Text className="featurePresentationText">
              Easily create and plan your own trips with our user-friendly
              interface.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title={
              <Title className="headerLevel3" level={3}>
                Get inspired
              </Title>
            }
            className="featureCard"
            cover={<SearchOutlined className="featureIcon" />}
          >
            <Text className="featurePresentationText">
              Explore a wide range of pre-planned trips created by other users.
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            className="featureCard"
            title={
              <Title className="headerLevel3" level={3}>
                Enjoy
              </Title>
            }
            cover={<SmileOutlined className="featureIcon" />}
          >
            <Text className="featurePresentationText">
              Access your trip plans on-the-go, ensuring a smooth and enjoyable
              journey.
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesSection;
