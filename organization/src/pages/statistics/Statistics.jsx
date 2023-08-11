import { message } from "antd";
import React from "react";
import { Header } from "../../components";
import { useTranslation } from "react-i18next";

export const Statistics = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Header
        title={"Статистика"}
        handleEvent1={() => message.warning(t(SignListPart))}
        handleEvent2={() => message.warning(t(SignListPart))}
      />
    </div>
  );
};
