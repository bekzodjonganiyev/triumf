import { Suspense, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { Sidebar, Header, Loader } from "..";

export const Layout = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === "/") {navigate("/organizations")}
  }, [])
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex w-screen h-screen">
        <Sidebar />
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
