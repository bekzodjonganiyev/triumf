import React from "react";
import { PaidBadgeSvg } from "../../assets/icons";

export const MoneyCard = ({ count, isPaid, hasStatus }) => {
  return (
    <div className="rounded-xl gradient p-14 text-center relative w-1/2">
      <p className=" text-white">To'lov miqdori:</p>
      <b className="text-7xl text-white">{count} UZS</b>
      {hasStatus && (
        <>
          {isPaid ? (
            <span className="absolute bottom-4 right-4 ">
              <PaidBadgeSvg />
            </span>
          ) : (
            <button className="absolute bottom-4 right-4 bg-white text-primary py-3 px-6 rounded-xl">
              To'landi
            </button>
          )}
        </>
      )}
    </div>
  );
};
