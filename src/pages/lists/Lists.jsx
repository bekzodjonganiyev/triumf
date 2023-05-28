import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { Modal, Table as AntTable, Button, Form, message, Upload, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FunctionalHeader, Header } from "../../components";
import {
  CalendarSvg,
  LoacationSvg,
  TimeSvg,
  UserSvg,
  BuildingSvg,
  OrdinarNumberSvg,
  EyeSvg,
  DowvloadSvg,
} from "../../assets/icons";

import apiClient from "../../helper/apiClient";
import { useAppContext } from "../../context/app.context";

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

const MODAL_TYPES = {
  ADD_PDF: "ADD_PDF",
  ADD_XLSX: "ADD_XLSX",
  VIEW_LETTER_INFO: "VIEW_LETTER_INFO",
};

export const Lists = () => {
  const [user] = useOutletContext();
  const [form] = Form.useForm();
  const { searchValue } = useAppContext();

  const [letterExcel, setLetterExcel] = useState([]);
  const [lettersList, setLettersList] = useState([]);
  const [letterName, setLetterName] = useState("");
  const [activeBtn, setActiveBtn] = useState(1);
  const [modal, setModal] = useState({ type: null, open: false });
  const [letterId, setLetterId] = useState("");
  const [districtId, setDistrictId] = useState("");

  const fetchLetterExcel = useQuery({
    queryKey: ["uploadLetterExcel"],
    queryFn: () =>
      apiClient.getAll(`upload-letter-excel/?organization=${user.id}`),
    onSuccess: (data) => {
      setLetterExcel(data.data);
    },
    refetchOnWindowFocus: false,
  });

  const fetchLettersList = useQuery({
    queryKey: ["lettersList", letterName],
    queryFn: () =>
      apiClient.getAll(
        `letters/?upload_file__name=${letterName}&organization_id=${user.id}`
      ),
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
              console.log(item);
              setLetterId(item.id);
              setModal({ open: true, type: MODAL_TYPES.VIEW_LETTER_INFO });
            }}
          >
            <EyeSvg />
          </button>
        ),
      }));
      setLettersList(arr);
    },
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const fetchDistricts = useQuery({
    queryKey: ["districts"],
    queryFn: () => apiClient.getAll(`letters/get_districts/`),
    refetchOnWindowFocus: false,
  });

  const fetchModalContent = useQuery({
    queryKey: ["modalContent", letterId],
    queryFn: () => apiClient.getById(`letters/${letterId}`),
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const uploadLetterMuatation = useMutation({
    mutationFn: (data) =>
      apiClient.add(
        `${
          modal.type === MODAL_TYPES.ADD_XLSX
            ? "upload-letter-excel/"
            : "letters/"
        }`,
        data
      ),
    onSuccess: () => {
      message.success(`Xatlaringiz qayta ishlanmoqda, \n
      ular tayyor bo'lganda jadvalda aks etadi`);
      setTimeout(() => {
        setModal({ open: false });
      }, 1000);
      fetchLetterExcel.refetch();
      form.resetFields();
    },
  });

  const onSubmit = (e) => {
    const fmData = new FormData();
    e?.file?.fileList?.forEach((file) => {
      fmData.append(
        `${modal.type === MODAL_TYPES.ADD_PDF ? "pdf_file" : "excel_file"}`,
        file?.originFileObj
      );
    });
    fmData.append("organization", user.id);
    fmData.append("district_id", districtId)
    for (var pair of fmData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    uploadLetterMuatation.mutate(fmData);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const uploadLefferForm = (
    <Form
      form={form}
      name="control-hooks"
      onFinish={(e) => onSubmit(e)}
      className="m-10 mb-3 flex flex-col items-center justify-between  w-96"
    >
      <h1 className="text-2xl mb-5">Ro’yxat yaratish</h1>
      <p className="text-center text-ligth_text text-sm mb-5">
        Ro’yxatni qo’shganingizdan keyin ro’yxatlar qatorida <br /> ko’rinishi
        uchun belgilangan to’lovni amalga oshirishingiz <br /> kerak bo’ladi
      </p>
      <Form.Item className="w-full">
        <Select
          placeholder="Bo'lim tanlash"
          onChange={(e) => setDistrictId(e)}
          allowClear
          size="large"
          bordered={false}
          className="border-2 border-[rgba(0,0,0,0.15)] rounded-xl focus:shadow-md"
        >
          {fetchDistricts.isLoading ? (
            <LoadingOutlined spin />
          ) : (
            fetchDistricts?.data?.data?.map((item) => (
              <Select.Option value={item.id}>{item.name}</Select.Option>
            ))
          )}
        </Select>
      </Form.Item>

      <Form.Item
        name="file"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Upload
          accept={`${
            modal.type === MODAL_TYPES.ADD_PDF ? " application/pdf" : ".xlsx"
          }`}
        >
          <div className="flex border-2 border-[rgba(0,0,0,0.15)] py-0.5 rounded-[13px] focus:shadow-md w-96">
            <input
              type="text"
              disabled
              className="p-2 outline-none w-full"
              placeholder={
                modal.type === MODAL_TYPES.ADD_PDF
                  ? " PDF file yuklang"
                  : "XLSX file yuklang"
              }
            />
            <span className="bg-secondary py-1 px-6 rounded-r-2xl">
              <DowvloadSvg />
            </span>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button
          type="ghost"
          htmlType="submit"
          className="bg-secondary text-white hover:bg-opacity-90 px-24"
          loading={uploadLetterMuatation.isLoading}
          size="large"
        >
          Saqlash
        </Button>
      </Form.Item>
    </Form>
  );

  const letterExcelResult = fetchLetterExcel.isLoading ? (
    <LoadingOutlined
      style={{
        fontSize: 30,
        color: "#FF932F",
      }}
      spin
    />
  ) : (
    <>
      {letterExcel.map((item) => (
        <button
          key={item.id}
          className={`border-2 py-2 px-6 rounded-xl ${
            item.id === activeBtn
              ? "active border-orange-400"
              : "border-gray-300"
          }`}
          onClick={() => {
            setLetterName(item.name);
            setActiveBtn(item.id);
          }}
        >
          {item.name}
        </button>
      ))}
    </>
  );

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
      <h2 className="text-2xl text-red-600 text-center my-5">Topshirilmagan</h2>
      <LazyLoadImage
        alt={fetchModalContent?.data?.data?.name}
        effect="black-and-white"
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
      <Header
        title={"Ro'yxatlar"}
        handleEvent1={() => setModal({ open: true, type: MODAL_TYPES.ADD_PDF })}
        handleEvent2={() =>
          setModal({ open: true, type: MODAL_TYPES.ADD_XLSX })
        }
      />

      <div className="flex flex-nowrap gap-3 mb-10 letter-excel">
        {letterExcelResult}
      </div>

      <FunctionalHeader
        hasStatistic={true}
        count={200}
        payment={"200 000 UZS"}
        classNames={"flex justify-between items-end"}
      />
      <br />
      <>
        <Modal
          centered
          open={modal.open}
          onOk={() => setModal({ open: false })}
          onCancel={() => setModal({ open: false })}
          className="relative"
          footer={[]}
        >
          {modal.type === MODAL_TYPES.VIEW_LETTER_INFO
            ? modalContentResult
            : uploadLefferForm}
        </Modal>

        {/* TODO FOR SEARCH FILTER IMPLEMENT */}
        {/* <Table /> */}
        <AntTable
          columns={columns}
          dataSource={lettersList}
          onChange={onChange}
          pagination={{
            pageSize: 10,
            position: ["bottomCenter"],
          }}
          loading={
            fetchLettersList.isRefetching ||
            fetchLettersList.isLoading ||
            fetchLettersList.isFetching
          }
        />
      </>
    </div>
  );
};
