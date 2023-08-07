import { Anchor, Button, message } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../../components/organisms/ConfirmModal";
import { useAuth } from "../../../context/auth.context";
import { useDeleteUserMutation } from "../../../services/users/actions";
import "./style.scss";

function ProfilePageSider({
  setEditingProfile,
}: {
  setEditingProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { Link } = Anchor;
  const deleteUserMutation = useDeleteUserMutation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleEditClick = () => {
    setEditingProfile(true);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleDelete = async (userId: string) => {
    try {
      await deleteUserMutation.mutateAsync(userId);
      logout();
      navigate("/");
    } catch (error) {
      message.error(
        "Error occurred while deleting your profile. Please try again."
      );
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Sider theme="light" width={200} className="siderUserProfile">
      {user && (
        <>
          <ConfirmationModal
            modalText={
              "Deleting your account will be permanent, do you wish to continue ?"
            }
            title={"Confirm Account Deletion"}
            isOpen={isOpen}
            handleOk={() => handleDelete(user?._id)}
            handleCancel={handleCancel}
          />
          <Button
            onClick={handleEditClick}
            type="primary"
            className="userProfileEditBtn"
          >
            Edit Profile
          </Button>
          <Button onClick={handleClick} className="userProfileEditBtn">
            Delete My Account
          </Button>
        </>
      )}
      <Anchor targetOffset={64} affix showInkInFixed>
        <Link href="#description" title="Description" />
        <Link href="#userTrips" title="My Trips" />
      </Anchor>
    </Sider>
  );
}
export default ProfilePageSider;
