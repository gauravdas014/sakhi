import React, { useState } from "react";
import axios from "axios";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Form, Input, Button, Switch, Upload } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from "@ant-design/icons";
import { handleSuccess, handleError } from "../../utils/helpers";
import { GlobalContext } from "../../Context/Global";
import { useContext } from "react";
import UploadFile from '../Upload';
// import User from "../../pages/user";

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};


const SignUp = ({ changeTab }) => {
  const { setIsAuthenticated } = useContext(GlobalContext);
  const [form] = Form.useForm();

  const [img, setImg] = useState('')

  const handleImage = (img) => {
    // console.log(form);
    setImg(img);
  }
  const onFinish = (data) => {
    // console.log(data); return;
    const { name, email, password, phone, address, will_sell, specialized_in } = data;
    const user = {
      name,
      email,
      password,
      phone,
      address,
      will_sell,
      specialized_in,
      img
    };
    // request backend for registration
    try {
      axios
        .post("/api/auth/signup/", user)
        .then((res) => {
          console.log(res.data);
          if (res.data.user) {
            if (res.data.user) {
              localStorage.setItem("x-access-token", res.data.token);
              handleSuccess("Registered  Successfully.");
              localStorage.setItem('user', JSON.stringify(res.data.user));

              setIsAuthenticated(true);
            } else {
              handleError(res.data.status);
            }
          } else {
            handleError(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          handleError(err.message)
        });
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
          {
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: 'Please enter a valid Email!'
          }
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        name="phone"
        // label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Mobile Number"
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input
          prefix={<HomeOutlined className="site-form-item-icon" />}
          placeholder="Address"
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
      <Form.Item
        name="cpassword"
        // label="Confirm Password"
        placeholder="Confirm password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item name="will_sell" label="Will sell" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item
        name="specialized_in"
        rules={[
          {
            required: false,
            message: "Please input your speciality!",
          },
        ]}
      >
        <Input
          placeholder="Specialize in"
        />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Profile Pic"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <UploadFile handleB64img={handleImage} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          SignUp
        </Button>
        {/* <br />
        <br />
        Or{" "}
        <a
          href="/dummylink"
          onClick={(e) => {
            e.preventDefault();
            changeTab("1");
          }}
        >
          Login
        </a> */}
      </Form.Item>
    </Form>
  );
};

export default SignUp;
