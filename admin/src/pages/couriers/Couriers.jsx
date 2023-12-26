import { useQuery } from "@tanstack/react-query";
import { Modal, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

import { AddSvg, Corparation } from "../../assets/icons";
import {
  AddAndUpdateForm,
  Card,
  FetchingLoader,
  FunctionalHeader,
} from "../../components";

import apiClient from "../../helper/apiClient";
import { useAppContext } from "../../context/app.context";
import { Link } from "react-router-dom";

export const Couriers = () => {
  const { Option } = Select;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [idsForLetterConnetToCourier, setIdsForLetterConnetToCourier] = useState({courierId: null, districtId:  null});

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["couriers"],
    queryFn: () => apiClient.getAll("couriers/"),
  });

  const getDistricts = useQuery({
    queryKey: ["districts"],
    queryFn: () => apiClient.getAll("letters/get_districts/"),
  });

  const couriers = data?.data.map((item) => ({
    id: item.id,
    icon: item.avatar ?? <Corparation />,
    name: item.full_name,
    firstUrl: "#",
    secondUrl: `profile/${item.id}`,
    firstActionTitle: "Xat berish",
    secondActionTitle: "Profil",
  }));

  if (isLoading) return <FetchingLoader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-wrap gap-10">
      <Modal
        open={isModalOpen2}
        onCancel={() => setIsModalOpen2(false)}
        footer={[]}
      >
        <div className="py-8 px-5">
          <h1 className="text-xl font-bold text-center mb-10">
            Xat topshirish
          </h1>
          <Select
            placeholder="Bo'lim tanlash"
            onChange={(e) => setIdsForLetterConnetToCourier(prev => ({...prev, districtId: e}))}
            allowClear
            size="large"
            bordered={false}
            className="border-2 border-[rgba(0,0,0,0.15)] rounded-xl focus:shadow-md text-center"
            style={{
              width: "100%",
              marginBottom: "30px",
            }}
          >
            {getDistricts.isLoading ? (
              <LoadingOutlined spin />
            ) : (
              getDistricts?.data?.data?.map((item) => (
                <Option value={item.id}>{item.name}</Option>
              ))
            )}
          </Select>
          {
            idsForLetterConnetToCourier.districtId 
              ? <Link
                  to={`/couriers/${idsForLetterConnetToCourier.courierId}/${idsForLetterConnetToCourier.districtId}/add_letter`}
                  className="bg-primary text-white text-center ml-[160px] py-2 px-4 rounded-md"
                  size="large"
                >
                  Davom etish
                </Link>
              : null
          }
        </div>
      </Modal>
      {isModalOpen ? (
        <AddAndUpdateForm
          url="couriers/"
          type="add"
          component="couriers"
          handleClose={() => setIsModalOpen(false)}
          title="Kurier qo'shish"
          imgKey={"avatar"}
        />
      ) : null}
      <FunctionalHeader
        count={500}
        payment={"520 500 UZS"}
        hasStatistic={false}
        hasAddBtn={true}
        text="Kurier qo'shish"
        icon={<AddSvg />}
        handleBtn={() => setIsModalOpen(true)}
        classNames="justify-end gap-10 mb-10"
      />
      {couriers?.map((item) => (
        <Card
          key={item.name}
          obj={item}
          hasEvent1={true}
          handleBtn1={(e) => {
            setIdsForLetterConnetToCourier(prev => ({...prev, courierId: e}));
            setIsModalOpen2(true);
          }}
        />
      ))}
    </div>
  );
};
