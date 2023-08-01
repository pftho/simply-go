import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../context/auth.context";
import "../styles.css";

function RegisterPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const { registerUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const { Title } = Typography;

  const onFinish = async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      if (!username || !email || !password) {
        setErrorMessage("Invalid Username, Email or Password");
        return;
      }

      setLoading(true);
      await registerUser(username, email, password);
      setErrorMessage("");
      navigate("/trips");
    } catch (err) {
      setErrorMessage("Invalid Email, Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="container">
      <Col span={12} className="container">
        <img
          className="loginRegisterImage"
          src="https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        />
      </Col>
      <Col span={12} flex={"auto"} className="loginRegisterForm">
        <div>
          <Title>Register</Title>
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username" },
              ]}
            >
              <Input />
            </Form.Item>

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
                Register
              </Button>
            </Form.Item>
          </Form>
          <Typography className="errorMessage">{errorMessage}</Typography>
        </div>
      </Col>
    </Row>
  );
}

export default RegisterPage;
