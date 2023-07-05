import { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { Link } from "react-router-dom";

export const CircularStatistics = ({ total, delivered, url }) => {
  useEffect(() => {
    const progressbar = document.querySelector(".ant-progress-inner");

    progressbar?.setAttribute(
      "style",
      "width: 200px; height: 200px; font-size: 24px"
    );
  }, []);
  return (
    <div className="flex items-center gap-10 border border-gray-400 p-10 rounded-xl w-1/2">
      <Progress
        type="circle"
        percent={Math.trunc((delivered * 100) / total)}
        strokeColor="#FF932F"
        trailColor="rgba(255, 147, 47, 0.2)"
        strokeWidth={8}
      />
      <div className="flex flex-col gap-20">
        <div>
          <p>Jami xatlar: <b>{total}</b></p>
          <p>Yetkazib berilgan: <b>{delivered}</b></p>
        </div>
        <Link to={"/statistics"+url} className="bg-primary text-white text-center rounded-md p-4 w-full">Ro'yxatnii ochish</Link>
      </div>
    </div>
  );
};
