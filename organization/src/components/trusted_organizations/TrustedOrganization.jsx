import React, { useState } from "react";
import { TashkilotLogo_1 } from "../../assets/icons";
import { useTranslation } from "react-i18next";
import apiClient from "../../helper/apiClient";
import axios from "axios";
import { useEffect } from "react";

export const TrustedOrganization = () => {
  const {t} = useTranslation();
  const [Logo, setLogo] = useState([])
  useEffect(() => {
    GetLogo()
  },[])
 async function GetLogo() {
    let result =  await axios.get("https://api.triumf-express.uz/api/v1/dashboard/partners")
    .then(result => {
      return result
    })
    .catch(err => {
      return err
    })
    setLogo(result.data)
  }

  return (
    <div className="container px-8 mx-auto text-center mb-32">
      <p className="text-ligth_text text-2xl">
        {t("Partner_title")}
      </p>

      <div className="flex items-center justify-center gap-12 flex-wrap mt-5">

        {Logo.length > 0 && Logo.map((i) => (
          <div key={i} className="p-20 rounded-2xl">
            <span>
              <img style={{width: "150px", height: "150px"}} src={i?.logo} alt="truimf" />
              {/* <TashkilotLogo_1 /> */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
