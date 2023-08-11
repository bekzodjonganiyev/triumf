import { useMutation } from "@tanstack/react-query";
import { Button, message, Table } from "antd";
import { useState } from "react";

import { useAppContext } from "../../context/app.context";
import apiClient from "../../helper/apiClient";
import axios from "axios";

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
  const { selectedLetters, necceseryIds } = useAppContext();
  const [Searcher, setSearch] = useState(selectedLetters)
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  console.log(selectedLetters);

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

  const selectedLettersMutation = useMutation({
    mutationFn: (data) => apiClient.add("letters/set_letters_courier/", data),
    onSuccess: () => message.success("Xatlar kuryerga biriktirildi")
  });

  const obj = {
    ...necceseryIds,
    letter_ids: selectedRowKeys
  }


 async function SearchLocation(location) {
    let result =  await axios.get(`https://api.triumf-express.uz/api/v1/dashboard/letters/?address=${location}`)
    .then(result => {
      return result
    })
    .catch(err => {
      return err
    })
    setSearch(result.data.results)
  }

  return (
    <>
    <div>
      <input onChange={(e) => SearchLocation(e.target.value)} type="search" name="" id="" placeholder="Qiidirish..." />
    </div>
  <div className="flex flex-col justify-between py-10">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={Searcher}
      />
      <button
        type=" "
        className="bg-primary text-white py-2 px-4 rounded-md mt-8"
        onClick={() => selectedLettersMutation.mutate(obj)}>
        Topshirish
      </button>
    </div>  
   </>
  );
};
