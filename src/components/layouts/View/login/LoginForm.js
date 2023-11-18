import React from "react";
import { Form, Input, Button } from "antd";
import useAuth from "../../../../hooks/useAuth";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();

  const requiredField = (message) => {
    return {
      required: true,
      message,
    };
  };

  return (
    <div className="view-content-wrapper">
      <div className="login-form">
        <h3>登入</h3>
        <Form form={form} name="dynamic_rule">
          <Form.Item
            name="username"
            label="帳號"
            rules={[requiredField("必填")]}
          >
            <Input placeholder="請輸入使用者名稱" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密碼"
            rules={[requiredField("必填")]}
          >
            <Input.Password
              placeholder="請輸入密碼"
              name="password"
              autoComplete="on"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={() => login(form)}>
              登入
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
