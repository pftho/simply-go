import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth.context";
import "../styles.css";

function LoginPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const { Title } = Typography;

  const onFinish = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      if (!email || !password) {
        setErrorMessage("Invalid Email or Password");
        return;
      }
      setLoading(true);
      await login(email, password);
      setErrorMessage("");
      navigate("/trips");
    } catch (err) {
      setErrorMessage("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="container">
      <Col span={12} className="container">
        <img
          className="loginRegisterImage"
          src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=960&q=80"
        />
      </Col>
      <Col span={12} flex={"auto"} className="loginRegisterForm">
        <div>
          <Title>Login</Title>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Login
              </Button>
            </Form.Item>
          </Form>
          <Typography className="errorMessage">{errorMessage}</Typography>
        </div>
      </Col>
    </Row>
  );
}

export default LoginPage;
