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
  ListSvg,
} from "../../assets/icons";

import logo from "../../assets/images/triumf.png";

export const Sidebar = ({ permissionKeys }) => {
  const svgRef = useRef(null);

  const superAdminItems = [
    {
      icon: <Corparation />,
      name: "Tashkilot",
      url: "/organizations",
      permissionKey: permissionKeys.is_organizations,
    },
    {
      icon: <Curiers />,
      name: "Kuriyerlar",
      url: "/couriers",
      permissionKey: permissionKeys.is_courier,
    },
    {
      icon: <StatisticsSvg />,
      name: "Statistika",
      url: "/statistics",
      permissionKey: permissionKeys.is_statistic,
    },
    {
      icon: <Income />,
      name: "Tushumlar",
      url: "/incomes",
      permissionKey: permissionKeys.is_incomes,
    },
    {
      icon: <ArchiveSvg />,
      name: "Arxiv",
      url: "/archive",
      permissionKey: permissionKeys.is_archive,
    },
    {
      icon: <AddAdminSvg />,
      name: "Admin qo'shish",
      url: "/admins",
      permissionKey: permissionKeys.is_add_admin,
    },
  ];

  const userAccess = (arr) => {
    const isSuperAdmin = "is_active" in permissionKeys
    return !isSuperAdmin ? arr : arr.filter((item) => item.permissionKey);
  };
  
  return (
    <aside className="bg-sidebar p-8 rounded-tr-[50px] rounded-br-[50px] h-full">
      <img src={logo} alt="Triumf logo" />
      <ul className="mt-10">
        {userAccess(superAdminItems).map((item) => (
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
          window.location.href = "/triumf-enter";
        }}
      >
        <LogOutSvg /> Chiqish
      </button>
    </aside>
  );
};
