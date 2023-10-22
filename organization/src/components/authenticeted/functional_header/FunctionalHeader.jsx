import { useQuery } from "@tanstack/react-query";
import { SearchSvg, UploadLetterSvg } from "../../../assets/icons";

import { useAppContext } from "../../../context/app.context";
import apiClient from "../../../helper/apiClient";
import { React, useEffect, useState } from "react";


export const FunctionalHeader = ({
  hasStatistic,
  hasAddBtn,
  count,
  payment,
  icon,
  text,
  handleBtn,
  handleSearch,
  classNames,
}) => {
  const onSearch = () => {};
  const {searchValue, setSearchValue} = useAppContext()
  const [UploadFile, setUploadFile] = useState(null)

  
  let letterid = localStorage.getItem('LetterID')
  
  // const { isLoading, error, data } = useQuery({
  //    queryKey: ["upload"],
  //    queryFn: () => apiClient.getAll("upload-letter-excel/"+letterid+"/"),
  //    onSuccess: ({ data }) => {
  //     console.log(data);
  //     setUploadFile(data.response);
      
  //   },
  //  });
  


  return (
    <div className={`w-full flex items-center ${classNames}`}>
      {hasStatistic ? (
        <div>
          <p>
            Jami: <b>{count}</b>
          </p>
          <p>
            To'lov: <b>{payment}</b>
          </p>
        </div>
      ) : null}
      <div className="flex">
        <a href={`https://api.triumf-express.uz/api/v1/dashboard/upload-letter-excel/${letterid}/generate_excel/`}>
         <button className="bg-secondary text-white flex gap-2 py-3 mx-2 px-4 rounded-xl" ><span><UploadLetterSvg /> </span> Excel hisobot</button>
        </a>
      <div className="flex border-2 border-[rgba(0,0,0,0.15)] p-1 rounded-xl focus:shadow-md">
        <input
          type="text"
          className="p-2 outline-none w-80"
          placeholder="Qidirish"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="bg-secondary py-0.5 px-6 rounded-r-2xl">
          <SearchSvg />
        </button>
      </div>
      </div>
      {hasAddBtn ? (
        <div>
          <button
            className="bg-primary text-white flex py-3 px-6 rounded-xl"
            onClick={() => handleBtn()}
          >
            <span className="mr-2">{icon}</span>
            {text}
          </button>
        </div>
      ) : null}
    </div>
  );
};
