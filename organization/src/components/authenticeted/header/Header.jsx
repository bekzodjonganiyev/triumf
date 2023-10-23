import { FilterIcon, NotificationSvg, UploadLetterSvg } from "../../../assets/icons";

export const Header = ({handleEvent1, handleEvent2, handleEvent3, title}) => {
  return (
    <header className="py-10">
      <div className="flex justify-between items-center gap-9">
        <div className=" flex justify-between items-center w-10/12">
          <h1 className="text-xl">{title}</h1>
          <button onClick={() => handleEvent3()} className="w-11 h-11 flex items-center justify-center gradient rounded-full p-2">
            <FilterIcon />
          </button>
        </div>
        <div className="flex justify-end items-cente w-2/6">
          <button className="bg-secondary text-white flex gap-2 py-3 mx-2 px-4 rounded-xl"onClick={() => handleEvent1()} ><span><UploadLetterSvg /> </span> ZIP file yuklash</button>
          <button className="bg-secondary text-white flex gap-2 py-3 px-4 rounded-xl" onClick={() => handleEvent2()}><span><UploadLetterSvg /> </span> XLSX file yuklash</button>
          {/* <button className="bg-secondary text-white flex gap-2 py-3 px-4 rounded-xl" onClick={() => handleEvent1()}><span><UploadLetterSvg /> </span> PDF file yuklash</button> */}
        </div>
      </div>
      <hr className="border-1 border-slate-300 mt-6" />
    </header>
  );
};
