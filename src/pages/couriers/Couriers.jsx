import { Corparation } from "../../assets/icons";
import { Card } from "../../components";

export const Couriers = () => {
  const info = [
    {
      img: <Corparation />,
      title: "Jumaboy Yo'chiyev",
      firstActionTitle: "Xat berish",
      secondActionTitle: "Profil",
      firstUrl: "give-latter",
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Jumaboy Yo'chiyev",
      firstActionTitle: "Xat berish",
      secondActionTitle: "Profil",
      firstUrl: "give-latter",
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Jumaboy Yo'chiyev",
      firstActionTitle: "Xat berish",
      secondActionTitle: "Profil",
      firstUrl: "give-latter",
      secondUrl: "profil",
    },
    {
      img: <Corparation />,
      title: "Jumaboy Yo'chiyev",
      firstActionTitle: "Xat berish",
      secondActionTitle: "Profil",
      firstUrl: "give-latter",
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
