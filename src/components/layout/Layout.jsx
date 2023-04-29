import { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Sidebar, Header, Loader } from "..";
import apiClient from "../../helper/apiClient";

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const { isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => apiClient.getRoles(),
    onSuccess: (data) => {
      setUser({ ...data?.data?.user });
    },
    refetchOnWindowFocus: false,
  });

  const notAllowedPath = pathname.split("/")[1];
  const pathSecurityFunc = (path) => {
    const arr = [
      { name: "organizations", access: user?.is_organizations },
      { name: "couriers", access: user?.is_courier },
      { name: "statistics", access: user?.is_statistic },
      { name: "incomes", access: user?.is_incomes },
      { name: "archive", access: user?.is_archive },
      { name: "admins", access: user?.is_add_admin },
    ];
    const notAllowedPathnames = arr.filter((item) => item?.access === false);
    
    notAllowedPathnames.forEach((item) => {
      if (item.name === path) navigate("/not-allowed");
    });
  };
  
  useEffect(() => {
    pathSecurityFunc(notAllowedPath);
  }, [pathname, pathSecurityFunc]);


  if (isLoading) return <Loader />;
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex w-screen h-screen">
        <Sidebar permissionKeys={user} />
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
