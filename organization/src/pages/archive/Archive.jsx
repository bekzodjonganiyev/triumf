import React from "react";
import { message } from "antd";
import { Header } from "../../components";

export const Archive = () => {
  return (
    <div>
      <Header
        title={"Aрхив"}
        handleEvent1={() => message.warning(t(SignListPart))}
        handleEvent2={() => message.warning(t(SignListPart))}
      />
    </div>
  );
};
