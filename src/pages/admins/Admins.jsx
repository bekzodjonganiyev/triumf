import React from "react";
import { Corparation } from "../../assets/icons";
import { Card } from "../../components";

export const Admins = () => {
  const info = [
    {
      img: <Corparation />,
      title: "Admin 1",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Admin 1",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Admin 1",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Admin 1",
      firstActionTitle: "Ro'yxatlar",
      secondActionTitle: "Profil",
      firstUrl: "lists",
      secondUrl: "profil",
    },
  ];
  return (
    <div className="flex flex-wrap gap-10">
      {info.map((item) => (
        <Card obj={item} />
      ))}
    </div>
  );
};
