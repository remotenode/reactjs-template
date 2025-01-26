import * as React from "react";
import { PlatformCardProps } from "./types";

export const PlatformCard: React.FC<PlatformCardProps> = ({ icon, name, watchIcon }) => {
  return (
    <div className="flex flex-col justify-center px-4 py-5 w-full rounded-3xl border border-solid border-indigo-600 border-opacity-50 min-h-[80px]">
      <div className="flex overflow-hidden items-center w-full">
        <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto leading-none basis-10">
          <img
            loading="lazy"
            src={icon}
            alt={`${name} platform icon`}
            className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square rounded-[44px]"
          />
          <div className="flex-1 shrink self-stretch my-auto">
            {name}
          </div>
        </div>
        <button className="flex gap-2 justify-center items-center self-stretch px-5 py-3 my-auto leading-none text-center border border-gray-100 border-solid min-h-[44px] rounded-[44px]">
          <img
            loading="lazy"
            src={watchIcon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span className="self-stretch my-auto">Watch</span>
        </button>
      </div>
    </div>
  );
};