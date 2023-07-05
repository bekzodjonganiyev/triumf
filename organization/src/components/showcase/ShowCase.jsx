import React from "react";

import { ShowCaseSvg_1, ShowCaseSvg_2 } from "../../assets/icons";
import img1 from "../../assets/images/ok.jpg"

export const ShowCase = () => {
  return (
    <div className="bg-hero mb-[450px]">
      <div className="container px-8 mx-auto pt-36 pb-52">
        <h1 className="text-6xl font-extrabold text-center mb-5">
          Pochta xizmatining eng sifatli <br /> va tezkor xizmati bizda!
        </h1>
        <p className="text-center text-ligth_text mb-20">
          Maktublar va yetkazmalaringizni tez va oson yetkazib berishingizda{" "}
          <br />
          ko’maklashamiz!
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 w-fit z-50">
          <span className="absolute -left-10 -top-10 -z-10">
            <ShowCaseSvg_1 />
          </span>
          <img
            src={img1}
            alt="Video in header"
            className="h-[500px] w-[900px] rounded-3xl"
          />
          <span className="absolute -right-10 -bottom-10 -z-10">
            <ShowCaseSvg_2 />
          </span>
        </div>
      </div>
    </div>
  );
};
