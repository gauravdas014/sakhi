import React, { useState } from "react";
import { Tabs, Modal, Button } from "antd";
import Login from "./Login";
import SignUp from "./Signup";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

const Auth = ({
  params,
  defaultActiveKey = "1",
  defaultVisible = false,
  showLoginButton = true,
}) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);
  // const [currentTab, setcurrentTab] = useState("1");

  return (
    <>
      {showLoginButton && (
        <Button type="primary" onClick={() => setIsVisible(true)}>
          Login
        </Button>
      )}
      <Modal
        style={{ top: 20 }}
        visible={isVisible}
        footer={null}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      >
        <div className="auth">
          <Tabs
            defaultActiveKey={defaultActiveKey}
            // activeKey={currentTab}
            centered
            onChange={callback}
          >
            <TabPane tab="Login" key="1">
              {/* <Login changeTab={setcurrentTab} /> */}
              <Login />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              {/* <SignUp changeTab={setcurrentTab} /> */}
              <SignUp />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </>
  );
};

export default Auth;
