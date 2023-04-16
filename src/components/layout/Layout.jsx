import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "..";

export const Layout = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <section className="flex flex-col flex-grow">
        <Header />
        <main className="px-5 flex-grow overflow-y-scroll custom-scrollbar">
          <Outlet />
        </main>
      </section>
    </div>
  );
};
