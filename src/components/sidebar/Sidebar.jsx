import { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  AddAdminSvg,
  ArchiveSvg,
  Corparation,
  Curiers,
  Income,
  StatisticsSvg,
  LogOutSvg,
} from "../../assets/icons";

import logo from "../../assets/images/triumf.png";

export const Sidebar = () => {
  const svgRef = useRef(null);
  const items = [
    {
      icon: <Corparation />,
      name: "Tashkilot",
      url: "/organizations",
    },
    {
      icon: <Curiers />,
      name: "Kuriyerlar",
      url: "/couriers",
    },
    {
      icon: <StatisticsSvg />,
      name: "Statistika",
      url: "/statistics",
    },
    {
      icon: <Income />,
      name: "Tushumlar",
      url: "/incomes",
    },
    {
      icon: <ArchiveSvg />,
      name: "Arxiv",
      url: "/archive",
    },
    {
      icon: <AddAdminSvg />,
      name: "Admin qo'shish",
      url: "/admins",
    },
  ];
  return (
    <aside className="bg-sidebar p-8 rounded-tr-[50px] rounded-br-[50px] h-full">
      <img src={logo} alt="Triumf logo" />
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.url}
              className="flex gap-4 py-3 px-4 rounded-lg"
            >
              <span ref={svgRef}>{item.icon}</span>
              <p>{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="text-red-600 flex mt-10 ml-4"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "https://triumf-landing.netlify.app/";
        }}
      >
        <LogOutSvg /> Chiqish
      </button>
    </aside>
  );
};
