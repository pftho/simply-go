import { Layout, Spin, Typography } from "antd";
import { useState } from "react";
import CoverImage from "../../components/organisms/CoverImage";
import TripList from "../../components/organisms/TripList";
import { useAuth } from "../../context/auth.context";
import { useTripsQuery } from "../../services/trips/actions";
import ProfilePageSider from "./ProfilePageSider";
import UserCardForm from "./UserCardForm";
import "./style.scss";

function ProfilePage() {
  const { user } = useAuth();
  const { data: trips, isLoading } = useTripsQuery();
  const [editingProfile, setEditingProfile] = useState(false);

  const { Content } = Layout;
  const { Title } = Typography;

  const imageUrl =
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80";

  const userTrips = trips?.filter((trip) => trip?.owner?._id === user?._id);

  if (isLoading) {
    return (
      <div className="spinDiv">
        <Spin />
      </div>
    );
  }

  return (
    <>
      {user ? (
        <>
          <CoverImage imageUrl={imageUrl} title={"My Profile"} />
          <Layout className="layout">
            <ProfilePageSider setEditingProfile={setEditingProfile} />
            <Content className="contentUserProfilePageContainer">
              <div className="userInfo">
                <Title id="profile" level={2}>
                  My Profile
                </Title>
                <UserCardForm
                  editingProfile={editingProfile}
                  setEditingProfile={setEditingProfile}
                  user={user}
                />
              </div>
              <div className="userInfo">
                <Title id="userTrips" level={2}>
                  My Trips
                </Title>
                <TripList trips={userTrips} />
              </div>
            </Content>
          </Layout>
        </>
      ) : (
        <Spin />
      )}
    </>
  );
}
export default ProfilePage;
