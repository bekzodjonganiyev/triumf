import { NotificationSvg } from "../../assets/icons";

export const Header = () => {
  return (
    <header className="py-10 px-5">
      <div className=" flex justify-between items-center">
        <h1>Page name</h1>
        <span className="w-11 h-11 flex items-center justify-center gradient rounded-full p-2">
          <NotificationSvg />
        </span>
      </div>
      <hr className="border-1 border-slate-300 mt-6"/>
    </header>
  );
};
