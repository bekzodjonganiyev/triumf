import { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  ArchiveSvg,
  StatisticsSvg,
  LogOutSvg,
  ListSvg,
  StatisticsAuthSvg,
} from "../../../assets/icons";

import logo from "../../../assets/images/triumf.png";
import { useTranslation } from "react-i18next";


export const Sidebar = () => {
  const svgRef = useRef(null);
  const {t} = useTranslation();


  const orgItems = [
    {
      icon: <ListSvg />,
      name: t("Lists"),
      url: `lists`,
    },
    // t("Lists")
    {
      icon: <StatisticsAuthSvg />,
      name: "Статистика",
      url: `statistics`,
    },
    {
      icon: <ArchiveSvg />,
      name: "Aрхив",
      url: `archives`,
    },
  ];

  return (
    <aside className="bg-hero p-8 rounded-tr-[50px] rounded-br-[50px] h-full">
      <img src={logo} alt="Triumf logo" />
      <ul className="mt-10">
        {orgItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.url} className="flex gap-4 py-3 px-4 rounded-lg">
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
          window.location.href = "/";
        }}
      >
        <LogOutSvg /> {t("Exit")}
      </button>
    </aside>
  );
};
