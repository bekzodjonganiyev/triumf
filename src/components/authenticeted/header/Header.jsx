import { DowvloadSvg, NotificationSvg, UploadLetterSvg } from "../../../assets/icons";

export const Header = ({handleEvent1, handleEvent2, title}) => {
  return (
    <header className="py-10">
      <div className="flex justify-between items-center gap-9">
        <div className=" flex justify-between items-center w-8/12">
          <h1 className="text-xl">{title}</h1>
          <span className="w-11 h-11 flex items-center justify-center gradient rounded-full p-2">
            <NotificationSvg />
          </span>
        </div>
        <div className="flex justify-between items-center w-4/12">
          <button className="bg-secondary text-white flex gap-2 py-3 px-4 rounded-xl" onClick={() => handleEvent1()}><span><UploadLetterSvg /> </span> PDF file yuklash</button>
          <button className="bg-secondary text-white flex gap-2 py-3 px-4 rounded-xl" onClick={() => handleEvent2()}><span><UploadLetterSvg /> </span> XML file yuklash</button>
        </div>
      </div>
      <hr className="border-1 border-slate-300 mt-6" />
    </header>
  );
};
