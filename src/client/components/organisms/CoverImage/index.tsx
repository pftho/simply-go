import { Typography } from "antd";
import "./styles.scss";

function CoverImage({
  imageUrl,
  title,
  tagline,
}: {
  imageUrl: string;
  title: string;
  tagline?: string;
}) {
  const { Title } = Typography;

  return (
    <div
      className="coverImage"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="coverText">
        <Title className="headerLevel1 ">{title}</Title>
        {tagline && <Title level={3}>{tagline} </Title>}
      </div>
    </div>
  );
}

export default CoverImage;
