import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    key: "trips",
    label: <Link to="/trips">Explore</Link>,
  },
  {
    key: "create",
    label: <Link to="/trips/create">Plan a trip</Link>,
  },
  {
    key: "login",
    label: <Link to="/auth/login">Login</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "register",
    label: <Link to="/auth/register">Register</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "userProfile",
    label: <Link to="/user/id">My profile</Link>,
    icon: <UserOutlined />,
  },
];
