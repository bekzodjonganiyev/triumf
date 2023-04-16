import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect } from "react";

export const Loader = () => {
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center bg-white backdrop-blur-lg transition-opacity">
      <LoadingOutlined
        style={{
          fontSize: 90,
          color: "#FF932F",
        }}
        spin
      />
    </div>
  );
};

export const FetchingLoader = () => {
  useEffect(() => {
    const spin = document.querySelector(".ant-spin-dot");
    const spinItem = document.querySelectorAll(".ant-spin-dot-item");

    spin.setAttribute("style", "width: 50px; height: 50px");

    spinItem.forEach((item) => {
      item.setAttribute(
        "style",
        "background-color: #FF932F; width: 20px; height: 20px"
      );
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <Spin size="large" />
    </div>
  );
};
