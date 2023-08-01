import CoverImage from "../../components/organisms/CoverImage";
import { Col, Layout, Menu, Row, Typography } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const { Title } = Typography;

function TripDetailsPage() {
  const imageUrl = "/test";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="sider">
        <Menu
          mode="inline"
          defaultSelectedKeys={["Description"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="description" icon={<UserOutlined />}>
            Description
          </Menu.Item>
          <Menu.Item key="activities" icon={<LaptopOutlined />}>
            Activities
          </Menu.Item>
          <Menu.Item key="Budget" icon={<NotificationOutlined />}>
            Budget
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <CoverImage imageUrl={imageUrl} title={"Explore"} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={2}>Description</Title>
                {/* Content for Section 1 */}
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={2}>Activities</Title>
                {/* Content for Section 2 */}
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={2}>Budget</Title>
                {/* Content for Section 3 */}
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
