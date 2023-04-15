import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "..";

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <section className="flex flex-col flex-grow">
        <Header />
        <main className="px-5 flex-grow overflow-y-scroll custom-scrollbar">
          <Outlet />
        </main>
      </section>
    </>
  );
};
