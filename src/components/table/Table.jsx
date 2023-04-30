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

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export const Table = ({lettersList, loading}) => (
  <>
    <AntTable
      columns={columns}
      dataSource={lettersList}
      onChange={onChange}
      pagination={{
        pageSize: 10,
        position: ["bottomCenter"],
      }}
      loading={loading}
    />
  </>
);
