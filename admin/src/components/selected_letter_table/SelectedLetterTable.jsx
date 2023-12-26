import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Input, message, Pagination, Select, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { NewSvg, PendingSvg } from "../../assets/icons";
import { useEffect, useMemo, useState } from "react";

import apiClient from "../../helper/apiClient";

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
    dataIndex: "icon",
  },
];

export const SelectedLetterTable = () => {
  const params = useParams();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState({filteredLetters: [], letters: []});
  const [statusLetter, setStatusLetter] = useState("");
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const lettrersForCouriers = useQuery({
    queryKey: ["lettrersForCouriers", params.districtId, page, statusLetter],
    queryFn: () =>
      apiClient.getAll(`letters/?district_id=${params.districtId}&page=${page}&status=${statusLetter ?? ""}`),
    onSuccess: (res) => {
      const arr = res.data.results.map((item, key) => ({
        key: item.id,
        order: key + 1,
        address: item.address,
        name: item.name,
        sender: item.organization,
        icon: item.status === "process" && <PendingSvg />
      }));
      setSelectedLetters(prev => ({...prev, letters: arr, filteredLetters: arr}));
    },
    refetchOnWindowFocus: false,
  });

  const selectedLettersMutation = useMutation({
    mutationFn: (data) => apiClient.add("letters/set_letters_courier/", data),
    onSuccess: () => message.success("Xatlar kuryerga biriktirildi"),
  });

  const obj = {
    courier_id: params.courierId,
    district_id: params.districtId,
    letter_ids: selectedRowKeys,
  };

  const handleSearch = (value) => {
    let temp = []
    const a = selectedLetters.letters.filter(item => {
      temp.push(item)
      if (value && value.length > 0) {
        return item.address
        .toLowerCase()
        .includes(value.trim().toLowerCase());
      } else return item
    })

    setSelectedLetters(prev => ({...prev, filteredLetters: a}))
  }

  return (
    <div className="flex flex-col justify-between py-10">

      {/* Filter, Search and Pagination */}
      <div className="flex justify-between mb-10">
        <div className="w-1/3">
          <Input 
            placeholder="Hudud bo'yicha qidiring"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="min-w-1/3">
          <Select
            placeholder="Xat statusini tanlang"
            onChange={(e) => setStatusLetter(e)}
            allowClear
            size="large"
            bordered={false}
            className="border-2 border-[rgba(0,0,0,0.15)] rounded-xl focus:shadow-md"
          >
            <Select.Option value={"new"}>New</Select.Option>
            <Select.Option value={"process"}>Process</Select.Option>
          </Select>
        </div>
        {
          lettrersForCouriers.isLoading || lettrersForCouriers.isRefetching
            ? <div className="min-w-1/3">
                <LoadingOutlined
                  className="float-left"
                  style={{
                    fontSize: 30,
                    color: "#FF932F",
                  }}
                  spin
                />
            </div>
            : <Pagination
              defaultCurrent={1}
              current={page}
              pageSize={50}
              total={Number(lettrersForCouriers?.data?.data?.count)}
              onChange={(value) => setPage(value)}
            />
        }
      </div>

      {/* Data table */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={selectedLetters.filteredLetters}
        pagination={false}
        loading={lettrersForCouriers.isLoading || lettrersForCouriers.isRefetching}
      />

      <button className="bg-primary text-white py-2 px-4 rounded-md mt-8" onClick={() => selectedLettersMutation.mutate(obj)}>Topshirish</button>

    </div>
  );
};
