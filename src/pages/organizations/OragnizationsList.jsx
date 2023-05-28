import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Modal, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import apiClient from "../../helper/apiClient";
import { BuildingSvg, CalendarSvg, EyeSvg, LoacationSvg, OrdinarNumberSvg, TimeSvg, UserSvg } from "../../assets/icons";

export const OragnizationsList = () => {
  const { id } = useParams();
  const [dataSource, setDataSource] = useState([]);
  const [letterId, setLetterId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const orgLetters = useQuery({
    queryKey: ["orgLetters", id],
    queryFn: () => apiClient.getAll(`letters?organization_id=${id}`),
    onSuccess: (res) => {
      const arr = res.data.map((item, key) => ({
        key: item.id,
        order: key + 1,
        address: item.address,
        name: item.name,
        sender: item.receiver_name,
        status:
          item.status === "finish" ? (
            <p className="text-[#00B800] font-semibold text-md">Topshirilgan</p>
          ) : item.status === "cancel" ? (
            <p className="text-[#FF3131] font-bold text-md">Topshirilmagan</p>
          ) : (
            <p className="text-[#ff9f31] font-bold text-md">Kutilmoqda</p>
          ),
        icon: item.is_delivered ? null : (
          <button
            onClick={() => {
              setLetterId(item.id);
              setModalOpen(true);
            }}
          >
            <EyeSvg />
          </button>
        ),
      }));
      setDataSource(arr);
    },
    refetchOnWindowFocus: false,
  });

  const fetchModalContent = useQuery({
    queryKey: ["modalContent", letterId],
    queryFn: () => apiClient.getById(`letters/${letterId}`),
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const columns = [
    {
      title: "#",
      dataIndex: "order",
    },
    {
      title: "Manzil",
      dataIndex: "address",
    },
    {
      title: "F.I.SH",
      dataIndex: "name",
    },
    {
      title: "Jo'natuvchi",
      dataIndex: "sender",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      dataIndex: "icon",
    },
  ];

  const modalContentResult = fetchModalContent.isLoading ? (
    <LoadingOutlined
      style={{
        fontSize: 30,
        color: "#FF932F",
      }}
      spin
    />
  ) : (
    <div className="px-10">
      <h2 className="text-2xl text-red-600 text-center my-5"></h2>
      <img
        alt={fetchModalContent?.data?.data?.name}
        loading="lazy"
        src={fetchModalContent?.data?.data?.image}
        className="rounded-lg"
      />
      <div className="flex justify-between mb-5">
        <p className="flex gap-2 items-center">
          <span>
            <TimeSvg />
          </span>{" "}
          Vaqt
        </p>
        <p className="flex gap-2 items-center">
          <span>
            <CalendarSvg />
          </span>{" "}
          Sana
        </p>
      </div>
      <p className="flex gap-2 items-center">
        <span className="-ml-0.5">
          <LoacationSvg />
        </span>{" "}
        {fetchModalContent?.data?.data?.address}
      </p>
      <p className="flex gap-2 items-center">
        <span className="-ml-0.5">
          <UserSvg />
        </span>{" "}
        {fetchModalContent?.data?.data?.courier ?? "Kuryer"}
      </p>
      <p className="flex gap-2 items-center">
        <span className="-ml-0">
          <BuildingSvg />
        </span>{" "}
        {fetchModalContent?.data?.data?.receiver_name}
      </p>
      <p className="flex gap-2 items-center">
        <span className="-ml-0.5">
          <OrdinarNumberSvg />
        </span>{" "}
        №{fetchModalContent?.data?.data?.id}
      </p>
      <p className="flex gap-2 items-center">
        <span className="">Sabab:</span> {fetchModalContent?.data?.data?.reason}
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(true)}
        onCancel={() => setModalOpen(false)}
        className="relative"
        footer={[]}
      >
        {modalContentResult}
      </Modal>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={
          orgLetters.isLoading ||
          orgLetters.isRefetching ||
          orgLetters.isFetching
        }
        pagination={{
          pageSize: 10,
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
};
