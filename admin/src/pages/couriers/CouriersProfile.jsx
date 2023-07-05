import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Corparation, EditSvg } from "../../assets/icons";
import { AddAndUpdateForm } from "../../components";
import apiClient from "../../helper/apiClient";

export const CouriersProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["courierById"],
    queryFn: () => apiClient.getById(`couriers/${id}/`),
    onSuccess: ({ data }) => {
      setFetchedData(data);
    },
    refetchOnWindowFocus: false,
  });
  return (
    <div>
      {isModalOpen ? (
        <AddAndUpdateForm
          urlById={`couriers/${id}/`}
          type="update"
          component="couriers"
          title={"Malumotlarni o'zgartirish"}
          defaultValues={fetchedData}
          handleClose={() => setIsModalOpen(false)}
          imgKey={"avatar"}
          queryKey={"courierByIdModal"}
        />
      ) : null}
      <div className="flex flex-col items-center justify-center gap-5 ">
        {fetchedData.avatar ? (
          <img
            src={fetchedData.avatar}
            alt={fetchedData.full_name}
            className="rounded-full object-cover w-32 h-32"
          />
        ) : (
          <span className="gradient w-28 h-28 rounded-full flex items-center justify-center">
            <Corparation color={"#fff"} width={"50"} height={"50"} />
          </span>
        )}
        <p className="text-xl font-bold w-56 text-center">{fetchedData.full_name ?? <p className="text-red-300">Bu kuryer o'chirilgan</p>}</p>
        <button
          className="bg-primary py-2 px-6 rounded-lg flex items-center gap-2 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          <span>
            <EditSvg />
          </span>
          Ma'lumotlarni o'zgartirish
        </button>
      </div>
      <ul className="flex gap-10 mt-10">
        <li>
          <Link to="statistika">Statistika</Link>
        </li>
        <li>
          <Link to="xisob">Xisob-kitob</Link>
        </li>
        <li>
          <Link to="arxiv">Arvix</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
