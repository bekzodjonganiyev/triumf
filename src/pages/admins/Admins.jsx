import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";
import { useState } from "react";

import { Corparation } from "../../assets/icons";
import { Card, FetchingLoader } from "../../components";

import apiClient from "../../helper/apiClient";

export const Admins = () => {
  const [modal2Open, setModal2Open] = useState(false);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["admins"],
    queryFn: () => apiClient.getAll("admins/"),
  });

  const admins = data?.data.map((item) => ({
    id: item.id,
    icon: item.avatar ?? <Corparation />,
    name: item.full_name,
    firstUrl: "#",
    secondUrl: "#",
    firstActionTitle: "Tahrirlash",
    secondActionTitle: "O'chirish",
  }));

  if (isLoading) return <FetchingLoader/>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-wrap gap-10">
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      {admins.map((item) => (
        <Card
          key={item.id}
          obj={item}
          hasEvent1={true}
          handleBtn1={() => setModal2Open(true)}
        />
      ))}
    </div>
  );
};
