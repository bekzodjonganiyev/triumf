import { useQuery } from "@tanstack/react-query";

import { Corparation } from "../../assets/icons";
import { Card } from "../../components";

import apiClient from "../../helper/apiClient";

export const Couriers = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["couriers"],
    queryFn: () => apiClient.getAll("couriers/"),
  });

  const couriers = data?.data.map((item) => ({
    icon: item.avatar ?? <Corparation />,
    name: item.full_name,
    firstUrl: "#",
    secondUrl: "profil",
    firstActionTitle: "Xat berish",
    secondActionTitle: "Profil",
  }));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-wrap gap-10">
      {couriers.map((item) => (
        <Card key={item.name} obj={item} />
      ))}
    </div>
  );
};
