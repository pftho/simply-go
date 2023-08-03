import { Spin } from "antd";
import CoverImage from "../../components/organisms/CoverImage";
import UserProfile from "../../components/organisms/UserCard";
import { useAuth } from "../../context/auth.context";

function ProfilePage() {
  const { user } = useAuth();

  const imageUrl =
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80";
  return (
    <>
      {user ? (
        <>
          <CoverImage imageUrl={imageUrl} title={"My Profile"} />
          <UserProfile user={user} />
        </>
      ) : (
        <Spin />
      )}
    </>
  );
}
export default ProfilePage;
