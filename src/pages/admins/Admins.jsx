import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Alert, message } from "antd";

import { AddSvg, Corparation } from "../../assets/icons";
import {
  AddAndUpdateForm,
  Card,
  FetchingLoader,
  FunctionalHeader,
} from "../../components";

import apiClient from "../../helper/apiClient";

export const Admins = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [modalConfig, setModalConfig] = useState("");

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["admins"],
    queryFn: () => apiClient.getAll("admins/"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => {
      return apiClient.delete(id);
    },
    onSuccess: () => {
      message.success("Muvaqqiyatli");

      setTimeout(() => window.location.reload(false), 1000);
    },
  });

  const admins = data?.data.map((item) => ({
    id: item.id,
    icon: item.avatar ?? <Corparation />,
    name: item.full_name,
    firstUrl: "#",
    secondUrl: "#",
    firstActionTitle: "Tahrirlash",
    secondActionTitle: "O'chirish",
  }));

  if (isLoading) return <FetchingLoader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-wrap gap-10">
      {modal2Open && modalConfig.type === "add" && (
        <AddAndUpdateForm
          hasImg={false}
          url="admins/"
          type="add"
          component="admins"
          handleClose={() => setModal2Open(false)}
          title="Admin qo'shish"
        />
      )}
      {modal2Open && modalConfig.type === "update" && (
        <AddAndUpdateForm
          hasImg={true}
          urlById={`admins/${modalConfig.id}`}
          type="update"
          component="admins"
          handleClose={() => setModal2Open(false)}
          title="Malumotlarni o'zgartirish"
        />
      )}
      <FunctionalHeader
        count={500}
        payment={"520 500 UZS"}
        hasStatistic={false}
        hasAddBtn={true}
        text="Admin qo'shish"
        icon={<AddSvg />}
        handleBtn={() => {
          setModal2Open(true);
          setModalConfig({ type: "add" });
        }}
        classNames="justify-end gap-10 mb-10"
      />
      {admins.map((item) => (
        <Card
          key={item.id}
          obj={item}
          hasEvent1={true}
          hasEvent2={true}
          handleBtn1={() => {
            setModal2Open(true);
            setModalConfig({ type: "update", id: item.id });
          }}
          handleBtn2={() => deleteMutation.mutate(`admins/${item.id}`)}
        />
      ))}
    </div>
  );
};
