import { LoadingOutlined } from "@ant-design/icons";

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

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
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
