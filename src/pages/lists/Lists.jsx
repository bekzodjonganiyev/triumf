import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import { FunctionalHeader, Header, Loader, Table } from "../../components";

import apiClient from "../../helper/apiClient";

export const Lists = () => {
  const [user] = useOutletContext();
  const [letterExcel, setLetterExcel] = useState([]);
  const [lettersList, setLettersList] = useState([]);
  const [letterName, setLetterName] = useState("");

  const fetchLetterExcel = useQuery({
    queryKey: ["uploadLetterExcel"],
    queryFn: () => apiClient.getAll(`upload-letter-excel/?organization=${94}`),
    onSuccess: (data) => {
      setLetterExcel(data.data);
    },
    refetchOnWindowFocus: false,
  });
  const fetchLettersList = useQuery({
    queryKey: ["lettersList", letterName],
    queryFn: () =>
      apiClient.getAll(
        `letters/?upload_file__name=${letterName}&organization_id=${94}`
      ),
    onSuccess: (res) => {
      const arr = res.data.map((item, key) => ({
        key: item.id,
        order: key + 1,
        address: item.address,
        name: item.name,
        sender: item.receiver_name,
        status: item.status,
      }));
      setLettersList(arr);
    },
    refetchOnWindowFocus: false,
    enabled: true,
  });

  if (fetchLetterExcel.isLoading) return <Loader />;

  return (
    <div>
      <Header title={"Ro'yxatlar"} />

      <div className="flex flex-nowrap gap-3 overflow-x-scroll mb-10">
        {letterExcel.map((item) => (
          <button
            key={item.id}
            className="border-2 border-gray-300 py-2 px-6 rounded-xl"
            onClick={() => {
              setLetterName(item.name);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <FunctionalHeader
        hasStatistic={true}
        count={200}
        payment={"200 000 UZS"}
        classNames={"flex justify-between items-end"}
      />
      <br />
      <Table lettersList={lettersList} loading={fetchLettersList.isLoading} />
    </div>
  );
};
