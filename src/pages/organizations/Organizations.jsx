import { useQuery } from "@tanstack/react-query";

import { Corparation } from "../../assets/icons";
import { Card } from "../../components";

import apiClient from "../../helper/apiClient";

export const Organizations = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => apiClient.getAll("organizations"),
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

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-wrap gap-10">
      {organizations.map((item) => (
        <Card key={item.name} obj={item} />
      ))}
    </div>
  );
};
