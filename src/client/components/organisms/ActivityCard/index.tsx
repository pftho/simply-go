import { Card, Typography } from "antd";

const { Meta } = Card;
const { Title } = Typography;

const ActivityCard = ({
  name,
  description,
  location,
  day,
  budget,
  imageUrl,
}: {
  name: string;
  description: string;
  location: string;
  day: string;
  budget: number;
  imageUrl?: string;
}) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={imageUrl ? <img alt={name} src={imageUrl} /> : null}
    >
      <Meta title={name} description={description} />
      <Title level={2}>Description:</Title>
      <Typography>{location}</Typography>
      <Title level={2}>Type:</Title>
      <Typography>{day}</Typography>
    </Card>
  );
};

export default ActivityCard;
