import { Typography } from "antd";
import "./styles.css";

function CoverImage({ imageUrl, title }: { imageUrl: string; title: string }) {
  const { Title } = Typography;

  return (
    <div
      className="coverImage"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Title> {title}</Title>
    </div>
  );
}

export default CoverImage;
