import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Table } from "antd";

import apiClient from "../../helper/apiClient";

export const OragnizationsList = () => {
  const { id } = useParams();
  const [dataSource, setDataSource] = useState([]);

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
        status: item.is_delivered ? (
          <p className="text-[#00B800] font-semibold text-md">Topshirilgan</p>
        ) : (
          <p className="text-[#FF3131] font-bold text-md">Topshirilmagan</p>
        ),
      }));
      setDataSource(arr);
    },
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
  ];
  return (
    <div>
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
