import { Card, Typography } from "antd";
import "./styles.css";

const { Title } = Typography;

const ActivityCard = ({
  name,
  description,
  type,
}: {
  name: string;
  description: string;
  type: string;
}) => {
  return (
    <Card className="activityCard">
      <div className="activityContent">
        <Title level={4}>{name}</Title>
        <div className="titleDiv">
          <Title level={5} className="titleMargin">
            Type
          </Title>
          <Typography>{type}</Typography>
        </div>
        <Title level={5} className="titleMargin">
          Description
        </Title>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </div>
    </Card>
  );
};

export default ActivityCard;
