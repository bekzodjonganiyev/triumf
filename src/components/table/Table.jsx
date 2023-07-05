import { Table as AntTable } from "antd";

import { EyeSvg } from "../../assets/icons";

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
    // title: "Status",
    dataIndex: "icon",
    render: (_, e) => (
      <button
        onClick={(a) => {
          console.log("a", a);
          console.log("e", e);
        }}
      >
        <EyeSvg />
      </button>
    ),
  },
];
const data = [
  {
    key: "1",
    order: "1",
    address: "John Brown",
    name: 98,
    sender: 60,
    status: 70,
  },
  {
    key: "2",
    order: "1",
    address: "Jim Green",
    name: 98,
    sender: 66,
    status: 89,
  },
  {
    key: "3",
    order: "1",
    address: "Joe Black",
    name: 98,
    sender: 90,
    status: 70,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
  {
    key: "4",
    order: "1",
    address: "Jim Red",
    name: 88,
    sender: 99,
    status: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export const Table = () => (

  <>
    <AntTable
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={{
        pageSize: 10,
        position: ["bottomCenter"],
      }}
    />
  </>
);
