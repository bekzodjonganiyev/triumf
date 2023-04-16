import { useQuery } from "@tanstack/react-query";

import { Corparation } from "../../assets/icons";
import { Card } from "../../components";

import apiClient from "../../helper/apiClient";

export const Admins = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["admins"],
    queryFn: () => apiClient.getAll("admins/"),
  });

  const admins = data?.data.map((item) => ({
    icon: item.avatar ?? <Corparation />,
    name: item.full_name,
    firstUrl: "#",
    secondUrl: "#",
    firstActionTitle: "Tahrirlash",
    secondActionTitle: "O'chirish",
  }));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-wrap gap-10">
      {admins.map((item) => (
        <Card obj={item} />
      ))}
    </div>
  );
};
