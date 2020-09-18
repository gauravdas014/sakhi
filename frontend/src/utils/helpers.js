import { message } from "antd";

export const handleError = (err) => {
  message.error(err);
};

export const handleSuccess = (msg) => {
  message.success(msg);
};
