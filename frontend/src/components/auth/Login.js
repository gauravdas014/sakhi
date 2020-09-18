import React, { useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { handleError, handleSuccess } from "../../utils/helpers";
import { GlobalContext } from "../../Context/Global";


const Login = ({ changeTab, history }) => {
  const { setIsAuthenticated } = useContext(GlobalContext);
  const onFinish = ({ userId, password }) => {
    // console.log("Received values of form: ", { email, password });
    try {
      axios
        .post("/api/auth/login", { userId, password })
        .then((res) => {
          if (res.data.status == "success") {
            localStorage.setItem("x-access-token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            handleSuccess("Logged In Successfully.");
            setIsAuthenticated(true);
            history.push("/");
          } else {
            handleError(res.data.status);
          }
        })
        .catch((err) => {
          handleError("Something went wrong.");
          console.error(err);
        });
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="userId"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Mobile Number"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              min: 6,
              message: 'Password must be 6 character long!'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/forgot" >
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          {/* <br />
          <br />
          Or{" "}
          <a
            href="/dummylink"
            onClick={(e) => {
              e.preventDefault();
              changeTab("2");
            }}
          >
            Sign Up
          </a> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default withRouter(Login);
