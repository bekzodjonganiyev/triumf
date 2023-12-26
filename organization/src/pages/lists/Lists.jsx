import React, { createRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useOutletContext, useLocation } from "react-router-dom";
import { Modal, Table as AntTable, Button, Form, message, Upload, Select, Pagination, } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as htmlToImage from "html-to-image";

import { FunctionalHeader, Header } from "../../components";
import { CalendarSvg, LoacationSvg, TimeSvg, UserSvg, BuildingSvg, OrdinarNumberSvg, EyeSvg, DowvloadSvg, CuriersLatterSvg, CuriersCarSvg, Curiers } from "../../assets/icons";
import placeholder from "../../assets/images/placeholder.webp";

import apiClient from "../../helper/apiClient";
import { time } from "../../helper/dateFormatter";

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
  ADD_ZIP: "ADD_ZIP"
};

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};


export const Lists = () => {
  const [user] = useOutletContext();
  const [form] = Form.useForm();

  const [letterExcel, setLetterExcel] = useState([]);
  const [lettersList, setLettersList] = useState([]);
  const [letterName, setLetterName] = useState("");
  const [activeBtn, setActiveBtn] = useState(1);
  const [modal, setModal] = useState({ type: null, open: false });
  const [modal2, setModal2] = useState({ type: null, open: false });
  const [modal3, setModal3] = useState({ type: null, open: false });
  const [letterId, setLetterId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [zipAndExelFilter, setZipAndExelFilter] = useState(
    JSON.parse(localStorage.getItem("letterType")
      || `{"endpoint":"upload-letter-excel","filterKey":"upload_file__id","org_id":"organization_id"}`)
    || { endpoint: "upload-letter-excel", filterKey: "upload_file__id", org_id: "organization_id" });
  const [page, setPage] = useState(1);
  const [selectedLatterCount, setSelectedLatterCount] = useState("");
  const ref = createRef(null);

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);


  // begin::Fetch with useQuery
  const fetchLetterExcel = useQuery({
    queryKey: ["uploadLetterExcel", zipAndExelFilter.endpoint],
    queryFn: () =>
      apiClient.getAll(`${zipAndExelFilter.endpoint}/?organization=${user.id}`),
    onSuccess: (data) => {
      localStorage.setItem("LetterID", data.data[0].id)
      setLetterExcel(data.data);
    },
    refetchOnWindowFocus: false,
  });

  const fetchLettersList = useQuery({
    queryKey: ["lettersList", letterName, page, zipAndExelFilter.filterKey],
    queryFn: () =>
      apiClient.getAll(
        `letters/?${zipAndExelFilter.filterKey}=${letterName}&${zipAndExelFilter.org_id}=${user.id}&page=${page}`
      ),
    onSuccess: (res) => {
      setSelectedLatterCount(res.data.count)
      const arr = res.data?.results?.map((item, key) => ({
        key: item.id,
        order: key + 1,
        address: item.address,
        name: item.name,
        sender: item.organization,
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
        `${modal.type === MODAL_TYPES.ADD_XLSX
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

  const uploadLetterMuatation2 = useMutation({
    mutationFn: (data) => apiClient.add("upload-letter-pdf/", data),
    onSuccess: () => {
      message.success(`Xatlaringiz qayta ishlanmoqda, \n
      ular tayyor bo'lganda jadvalda aks etadi`);
      setTimeout(() => {
        setModal2({ open: false });
      }, 1000);
      form.resetFields();
    },
  });
  // end::Fetch with useQuery

  // begin::Necessary functions
  const onSubmit = (e) => {
    const fmData = new FormData();
    e?.file?.fileList?.forEach((file) => {
      fmData.append(
        `${modal.type === MODAL_TYPES.ADD_PDF ? "pdf_file" : "excel_file"}`,
        file?.originFileObj
      );
    });
    fmData.append("organization", user.id);
    fmData.append("district_id", districtId);
    for (var pair of fmData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    uploadLetterMuatation.mutate(fmData);
  };
  const onSubmit2 = (e) => {
    const fmData = new FormData();

    // zip file append to formData
    e?.file?.fileList?.forEach((file) => {
      fmData.append("zip_file", file?.originFileObj);
    });

    fmData.append("organization", user.id);
    fmData.append("district_id", districtId);

    for (var pair of fmData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    uploadLetterMuatation2.mutate(fmData);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onChangePage = () => { };
  // end::Necessary functions

  // begin::UI components

  // form 1
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
          maxCount={1}
          accept={`${modal.type === MODAL_TYPES.ADD_PDF ? " application/pdf" : ".xlsx"
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
  // form 1


  // form 2
  const uploadLefferForm2 = (
    <Form
      form={form}
      name="control-hooks"
      onFinish={(e) => onSubmit2(e)}
      className="m-10 mb-3 flex flex-col items-center justify-between  w-96"
    >
      <h1 className="text-2xl mb-5">Zip file yuklang</h1>
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
          maxCount={1}
        >
          <div className="flex border-2 border-[rgba(0,0,0,0.15)] py-0.5 rounded-[13px] focus:shadow-md w-96">
            <input
              type="text"
              disabled
              className="p-2 outline-none w-full"
              placeholder={"Zip fayl yuklang"}
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
  // form 2

  // form 3
  const filterForm = (
    <>
      <p className="text-center text-ligth_text text-base my-5">
        Zip yoki exel fayllarni korish uchun tipni tanlang
      </p>
      <Select
        placeholder="Bo'lim tanlash"
        onChange={(e) => {
          localStorage.setItem("letterType", e)
          setZipAndExelFilter(JSON.parse(e))
          setLetterName("")
        }}
        allowClear
        size="large"
        bordered={false}
        className="border-2 border-[rgba(0,0,0,0.15)] rounded-xl focus:shadow-md w-2/3 mx-auto block"
      >

        <Select.Option value={JSON.stringify({ endpoint: "upload-letter-excel", filterKey: "upload_file__id", org_id: "organization_id" })}>Exel fayllar</Select.Option>
        <Select.Option value={JSON.stringify({ endpoint: "upload-letter-pdf", filterKey: "upload_zip_file__id", org_id: "org_id" })}>Zip fayllar</Select.Option>

      </Select>
    </>
  )
  // form 3

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
      {
        letterExcel.map((item) => (
          <button
            key={item.id}
            className={`border-2 py-2 px-6 rounded-xl ${item.id === activeBtn ? "active border-orange-400" : "border-gray-300"
              }`}
            onClick={() => {
              setPage(1)
              setLetterName(item.id);
              localStorage.setItem("LetterID", item.id)
              setActiveBtn(item.id);
            }}
          >
            <p className="w-44">{item.name}</p>
          </button>
        ))
      }
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
    <>
      <div className="p-10 bg-white" ref={ref}>
        {
          fetchModalContent?.data?.data?.status === "finish" ? (
            <p className="text-[#00B800] font-semibold text-lg mb-2 text-center">Topshirilgan</p>
          ) : fetchModalContent?.data?.data?.status === "cancel" ? (
            <p className="text-[#FF3131] font-bold text-lg mb-2 text-center">Topshirilmagan</p>
          ) : (
            <p className="text-[#ff9f31] font-bold text-lg mb-2 text-center">Kutilmoqda</p>
          )
        }
        <a
          href={fetchModalContent?.data?.data?.image ?? placeholder}
          target="_blank"
        >
          <LazyLoadImage
            alt={fetchModalContent?.data?.data?.name}
            effect="black-and-white"
            src={fetchModalContent?.data?.data?.image ?? placeholder}
            className={`rounded-lg ${fetchModalContent?.data?.data?.image ? "" : "ml-16"
              }`}
          />
        </a>
        <div className="flex justify-between mb-5">
          <p className="flex gap-2 items-center">
            <span>
              <TimeSvg />
            </span>{" "}
            {time(fetchModalContent?.data?.data?.created_at).hour}
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <CalendarSvg />
            </span>
            {time(fetchModalContent?.data?.data?.created_at).date}
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
            <CuriersLatterSvg />
          </span>{" "}
          {fetchModalContent?.data?.data?.name}
        </p>

        <p className="flex gap-2 items-center">
          <span className="-ml-0">
            <BuildingSvg />
          </span>{" "}
          {fetchModalContent?.data?.data?.organization}
        </p>
        <p className="flex gap-2 items-center">
          <span className="-ml-0.5">
            <Curiers />
          </span>{" "}
          {fetchModalContent?.data?.data?.courier ?? "Kuryer"}
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

      <button className="px-4 py-2 border bg-orange-400 rounded-lg text-lg font-extralight text-white w-2/3 ml-20" onClick={downloadScreenshot}>Get Skreenshot</button>
    </>
  );
  // end::UI components

  return (
    <div className="pb-10">
      <Header
        title={"Ro'yxatlar"}
        handleEvent1={() => setModal2({ open: true, type: MODAL_TYPES.ADD_PDF })}
        handleEvent2={() => setModal({ open: true, type: MODAL_TYPES.ADD_XLSX })}
        handleEvent3={() => setModal3({ open: true, type: MODAL_TYPES.ADD_PDF })}
      />
      <div className="flex mb-5">
        <b className="mr-2">Fayl turi:</b>
        {" "}{zipAndExelFilter.endpoint === "upload-letter-pdf" ? <p>ZIP</p> : <p>EXCEL</p>}
      </div>

      <div className="flex flex-row gap-3 w-[1200px] mb-10 overflow-hidden hover:overflow-x-scroll scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100">
        {letterExcelResult}
      </div>

      <FunctionalHeader
        hasStatistic={true}
        count={selectedLatterCount}
        // payment={"200 000 UZS"}
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
          {
            modal.type === MODAL_TYPES.VIEW_LETTER_INFO
              ? modalContentResult
              : uploadLefferForm
          }
        </Modal>
        <Modal
          centered
          open={modal2.open}
          onOk={() => setModal2({ open: false })}
          onCancel={() => setModal2({ open: false })}
          className="relative"
          footer={[]}
        >
          {uploadLefferForm2}
        </Modal>

        <Modal
          centered
          open={modal3.open}
          onOk={() => setModal3({ open: false })}
          onCancel={() => setModal3({ open: false })}
          className="relative"
          footer={[]}
        >
          {filterForm}
        </Modal>
        {/* TODO FOR SEARCH FILTER IMPLEMENT */}

        {/* <Table /> */}
        <AntTable
          columns={columns}
          dataSource={lettersList}
          onChange={onChange}
          pagination={false}
          loading={
            fetchLettersList.isRefetching ||
            fetchLettersList.isLoading ||
            fetchLettersList.isFetching
          }
          className="mb-10"
        />
        {letterName ? (
          fetchLettersList.isLoading ? (
            <LoadingOutlined
              style={{
                fontSize: 30,
                color: "#FF932F",
              }}
              spin
            />
          ) : (
            <Pagination
              defaultCurrent={1}
              current={page}
              pageSize={50}
              total={Number(fetchLettersList?.data?.data?.count)}
              onChange={(value) => setPage(value)}
            />
          )
        ) : null}
      </>
    </div>
  );
};
