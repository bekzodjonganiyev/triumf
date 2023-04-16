import { Spin } from "antd";

// import "./Loader.css"

export const Loader = () => {
  return (
    <div className="absolute w-screen h-screen flex items-center justify-center bg-white backdrop-blur-lg transition-opacity">
      <div>
        <Spin tip="Loading" size="large" />
      </div>
    </div>
  );
};
