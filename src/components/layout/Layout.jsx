import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Sidebar, Header, Loader } from "..";
import apiClient from "../../helper/apiClient";

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isSuccess, error, data, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: () => apiClient.getRoles(),
    refetchOnWindowFocus:  false
  });

  const [roles, setRoles] = useState({});
  const notAllowedPath = pathname.split("/")[1];
  const notAllowedPathnames = [
    "organizations",
    "couriers",
    "statistics",
    "incomes",
    "archive",
    "admins",
  ];

  useEffect(() => {
    if (isSuccess) {
      setRoles(data.data);
    }
    pathSecurityFunc(notAllowedPath);
  }, [data, pathname]);

  const pathSecurityFunc = (path) => {
    let role = "";
    if (isSuccess) {
      role = data?.data?.role;
    }

    if (role === "Organization") {
      notAllowedPathnames.forEach((item) => {
        if (item === path) navigate("/");
      });
    }
  };
  
  if (isLoading) return <Loader />;
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex w-screen h-screen">
        <Sidebar
          role={data?.data?.role ?? ""}
          name={data?.data?.user?.name ?? ""}
        />
        <section className="flex flex-col flex-grow">
          <Header />
          <main className="px-5 flex-grow overflow-y-scroll custom-scrollbar">
            <Outlet />
          </main>
        </section>
      </div>
    </Suspense>
  );
};
