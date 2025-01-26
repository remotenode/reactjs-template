import * as React from "react";
import { PartnerCardProps } from "./types";

export const PartnerCard: React.FC<PartnerCardProps> = ({ icon, title, description, backgroundColor }) => {
  return (
    <div className={`flex overflow-hidden flex-col justify-center items-start p-4 ${backgroundColor} rounded-3xl min-w-[240px] w-[330px]`}>
      <div className="flex flex-col max-w-full w-[220px]">
        <div className="flex gap-1 items-center self-start py-1 pr-2.5 pl-1.5 text-sm font-medium leading-none bg-gray-100 rounded-3xl text-slate-950">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <div className="self-stretch my-auto">{title}</div>
        </div>
        <div className="flex gap-2 items-center mt-2.5 w-full text-base font-semibold leading-5 text-black">
          <div className="self-stretch my-auto w-[220px]">{description}</div>
        </div>
      </div>
    </div>
  );
};