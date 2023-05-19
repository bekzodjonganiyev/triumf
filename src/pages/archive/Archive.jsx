import React from "react";
import { message } from "antd";
import { Header } from "../../components";

export const Archive = () => {
  return (
    <div>
      <Header
        title={"Arxiv"}
        handleEvent1={() => message.warning(`Ro'yxatlar bo'limiga o'ting`)}
        handleEvent2={() => message.warning(`Ro'yxatlar bo'limiga o'ting`)}
      />
    </div>
  );
};
