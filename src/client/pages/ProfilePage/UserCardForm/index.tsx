import { Avatar, Button, Form, Input, Typography, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { useUpdateUserMutation } from "../../../services/users/actions";
import { EditUseRequest, User, UserProfile } from "../../../types/user/types";
import "./styles.css";

const UserCardForm = ({
  user,
  editingProfile,
  setEditingProfile,
}: {
  user: User;
  editingProfile: boolean;
  setEditingProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [form] = Form.useForm();
  const editUserProfile = useUpdateUserMutation();
  const [imageUrlPreview, setImageUrlPreview] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState<UserProfile | null>(user);

  const handleSave = async (values: EditUseRequest) => {
    try {
      await editUserProfile.mutateAsync({ data: values, userId: user._id });
      setEditedUser(values);
      setEditingProfile(false);
    } catch (error) {
      message.error(
        "Error occurred while updating your profile. Please try again."
      );
    }
  };

  const handleCancel = () => {
    setEditingProfile(false);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageUrl = event.target.value;
    setImageUrlPreview(imageUrl);
  };

  return (
    <Content className="userProfileContent">
      <div className="userProfileInfoDiv">
        {editingProfile ? (
          <Form
            initialValues={{
              username: user.username,
              email: user.email,
              imageUrl: user.imageUrl,
            }}
            form={form}
            onFinish={handleSave}
            layout="vertical"
          >
            <Form.Item label="Image URL" name="imageUrl">
              <Input onChange={handleImageUrlChange} />
            </Form.Item>
            {imageUrlPreview && (
              <img
                src={imageUrlPreview}
                alt="Image Preview"
                style={{ width: "200px", height: "auto" }}
              />
            )}
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="userProfileInfoDiv">
            {editedUser?.imageUrl && (
              <Avatar size={128} src={editedUser?.imageUrl} />
            )}
            <div className="userInfo">
              <Typography.Title level={2}>
                {editedUser?.username}
              </Typography.Title>
              <Typography.Text>Email: {editedUser?.email}</Typography.Text>
            </div>
          </div>
        )}
      </div>
    </Content>
  );
};

export default UserCardForm;
