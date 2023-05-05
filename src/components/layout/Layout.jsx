import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Sidebar, Loader } from "..";
import apiClient from "../../helper/apiClient";
import AppContextProvider from "../../context/app.context";

export const Layout = () => {
  const [user, setUser] = useState({});

  const { isLoading, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: () => apiClient.getRoles(),
    onSuccess: (data) => {
      setUser({ ...data?.data?.user });
    },
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <Loader />;
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <section className="flex flex-col flex-grow">
          <main className="px-5 flex-grow overflow-y-scroll custom-scrollbar">
            <AppContextProvider>
              {isSuccess && !isLoading && <Outlet context={[user]} />}
            </AppContextProvider>
          </main>
        </section>
      </div>
    </Suspense>
  );
};
