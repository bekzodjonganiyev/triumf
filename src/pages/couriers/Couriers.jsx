import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { AddSvg, Corparation } from "../../assets/icons";
import {
  AddAndUpdateForm,
  Card,
  FetchingLoader,
  FunctionalHeader,
} from "../../components";

import apiClient from "../../helper/apiClient";

export const Couriers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["couriers"],
    queryFn: () => apiClient.getAll("couriers/"),
  });

  const couriers = data?.data.map((item) => ({
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
          handleBtn1={() => setIsModalOpen(true)}
        />
      ))}
    </div>
  );
};
