import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Corparation, EditSvg } from "../../assets/icons";
import { AddAndUpdateForm } from "../../components";
import apiClient from "../../helper/apiClient";

export const OrganizationsProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["organizationById"],
    queryFn: () => apiClient.getById(`organizations/${id}/`),
    onSuccess: ({ data }) => {
      setFetchedData(data);
    },
    refetchOnWindowFocus: false
  });
  return (
    <div>
      {isModalOpen ? (
        <AddAndUpdateForm
          hasImg={true}
          urlById={`organizations/${id}/`}
          type="update"
          component="organizations"
          title={"Malumotlarni o'zgartirish"}
          defaultValues={fetchedData}
          handleClose={() => setIsModalOpen(false)}
          imgKey={"icon"}
        />
      ) : null}
      <div className="flex flex-col items-center justify-center gap-5 ">
        {fetchedData.icon ? (
          <img
            src={fetchedData.icon}
            alt={fetchedData.name}
            className="rounded-full object-cover w-32 h-32"
          />
        ) : (
          <span className="gradient w-28 h-28 rounded-full flex items-center justify-center">
            <Corparation color={"#fff"} width={"50"} height={"50"} />
          </span>
        )}
        <p className="text-xl font-bold w-56 text-center">{fetchedData.name}</p>
        <button
          className="bg-primary py-2 px-6 rounded-lg flex items-center gap-2 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          <span>
            <EditSvg />
          </span>{" "}
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
