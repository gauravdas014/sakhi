import React from "react";
import Auth from "../components/auth";
// import Navbar from "../components/Navbar";
import { Typography } from "antd";

export const AuthPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Auth defaultVisible={true} showLoginButton={false} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Typography.Title style={{ margin: "auto" }}>
          Please Login To Continue...
        </Typography.Title>
      </div>
    </>
  );
};


