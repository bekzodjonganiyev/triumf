import React from "react";
import { TashkilotLogo_1 } from "../../assets/icons";

export const TrustedOrganization = () => {
  return (
    <div className="container px-8 mx-auto text-center mb-32">
      <p className="text-ligth_text text-2xl">
        Bizga ishonch bildirgan tashkilotlar
      </p>

      <div className="flex items-center justify-between mt-5">
        {[1, 2, 3, 4].map((i) => (
          <div className="p-20 bg-graycolor1 rounded-2xl">
            <span>
              <TashkilotLogo_1 />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
