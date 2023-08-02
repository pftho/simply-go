import { Typography } from "antd";
import "./styles.css";

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
        <Title> {title}</Title>
        {tagline && <Title level={2}>{tagline} </Title>}
      </div>
    </div>
  );
}

export default CoverImage;
