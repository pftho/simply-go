import CoverImage from "../../components/organisms/CoverImage";
import UserProfile from "../../components/organisms/UserCard";

function ProfilePage() {
  return (
    <>
      <CoverImage image={homePageCoverImage} title={"Explore"} />
      <UserProfile user={user} />
    </>
  );
}
export default ProfilePage;
