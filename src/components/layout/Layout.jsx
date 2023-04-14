import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "..";

export const Layout = () => {
  return (
    <div className="flex w-screen h-full">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="px-5 bg-slate-100 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
