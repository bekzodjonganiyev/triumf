import { message } from "antd";
import React from "react";
import { Header } from "../../components";

export const Statistics = () => {
  return (
    <div>
      <Header
        title={"Statistika"}
        handleEvent1={() => message.warning(`Ro'yxatlar bo'limiga o'ting`)}
        handleEvent2={() => message.warning(`Ro'yxatlar bo'limiga o'ting`)}
      />
    </div>
  );
};
