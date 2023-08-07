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
  const { Title, Text } = Typography;

  return (
    <div
      className="coverImage"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="coverText">
        <Title level={1} className="headerLevel1" style={{ marginBottom: 0 }}>
          {title}
        </Title>
        {tagline && (
          <Title className="headerLevel2" level={2}>
            {tagline}
          </Title>
        )}
      </div>
    </div>
  );
}

export default CoverImage;
