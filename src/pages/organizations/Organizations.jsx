import { useQuery, useMutation } from "@tanstack/react-query";
import { Modal } from "antd";
import { useState } from "react";

import { AddSvg, Corparation } from "../../assets/icons";
import {
  AddAndUpdateForm,
  Card,
  FetchingLoader,
  FunctionalHeader,
} from "../../components";

import apiClient from "../../helper/apiClient";

export const Organizations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, error, data } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => apiClient.getAll("organizations/"),
  });

  const organizations = data?.data.map((item) => ({
    id: item.id,
    icon: item.icon ?? <Corparation />,
    name: item.name,
    firstUrl: `list/${item.id}`,
    secondUrl: `profile/${item.id}`,
    firstActionTitle: "Ro'yxatlar",
    secondActionTitle: "Profil",
  }));

  if (isLoading) return <FetchingLoader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {isModalOpen ? (
        <AddAndUpdateForm
          hasImg={false}
          url="organizations/"
          type="add"
          component="organizations"
          handleClose={() => setIsModalOpen(false)}
          title="Tashkilot qo'shish"
        />
      ) : null}
      <FunctionalHeader
        count={500}
        payment={"520 500 UZS"}
        hasStatistic={false}
        hasAddBtn={true}
        text="Tashkilot qo'shish"
        icon={<AddSvg />}
        handleBtn={() => setIsModalOpen(true)}
        classNames="justify-end gap-10 mb-10"
      />
      <div className="flex flex-wrap gap-6">
        {organizations.map((item) => (
          <Card key={item.name} obj={item} />
        ))}
      </div>
    </>
  );
};
