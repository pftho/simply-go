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
        <Title level={1} className="headerLevel1 ">
          {title}
          {tagline && (
            <Title className="headerLevel2" level={2}>
              {tagline}
            </Title>
          )}
        </Title>
      </div>
    </div>
  );
}

export default CoverImage;
