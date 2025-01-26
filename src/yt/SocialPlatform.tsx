import * as React from "react";
import { PlatformCard } from "./PlatformCard";
import { PartnerCard } from "./PartnerCard";

const platforms = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33b37294f86adf4ca9b720eb58a96bb56507462f6284bf2dea8bd3d42c9c609f?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "YouTube", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8c6f739b3d299748d43cac424bf0f5b25fc4e22cbb4e57a395f87896c58b57?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "Twitch", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0871b2a28d399a3e10190982309742a0425c58e904f504b8f8a9a49969ec0d6a?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "Instagram", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff95d5e98bf50cd249a6c0d500a0ec3b0538d8a303f672d36e9cbe868ce385a8?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "Facebook", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4918fed5395019c1040331e86892ea6685624fdcb4965156f2bfd11039a4ff60?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "TikTok", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a271bbb6a4b76ce40ed07c76d0da297b5f0d1d5a1da06707c2fbf5f284f4c2f5?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "Twitter", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e2f853b91785a1e7ef0b74f122d6ebb10f9102442cb32599aa1a8af6c260d5a?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2", name: "Google", watchIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d828362f837c84586ef08ac0ed96dd74afd22507a22ddefab689df1f0377d7?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2" },
];

const partners = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/222de1a1867290970a8521ebbe9a1c5a7ce7093cca38385c447f5463df8df1b1?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2",
    title: "New update",
    description: "Top up with skins and get extra balance! \n10$ turns into 11$",
    backgroundColor: "bg-sky-400"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/222de1a1867290970a8521ebbe9a1c5a7ce7093cca38385c447f5463df8df1b1?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2",
    title: "New update",
    description: "Top up with skins and get extra balance! \n10$ turns into 11$",
    backgroundColor: "bg-violet-500"
  }
];

export const SocialPlatform: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-10 mx-auto w-full bg-zinc-900 max-w-[480px] rounded-[44px]">
      <div className="flex flex-col items-center self-center w-full">
        <div className="flex gap-3 items-center px-4 pt-2.5 w-full text-sm font-medium leading-none text-gray-100 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c80a87bcf6c90ecb682869a0f38b8acd547bd8cba38ce3904aa82304ded4ed6?placeholderIfAbsent=true&apiKey=bb9ad7ca1b5c4ab1bb2b24cb54ce16d2"
            alt="User profile"
            className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square rounded-[44px]"
          />
          <div className="flex items-center self-stretch py-2.5 my-auto rounded-none border-t border-r border-b border-indigo-600 border-opacity-50 min-h-[36px] w-[130px]">
            <div className="flex-1 shrink self-stretch my-auto w-full text-ellipsis">
              Artem
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 w-full">
          <div className="px-4 pt-2.5 w-full text-2xl font-semibold tracking-wide leading-none text-gray-100">
            Our Partners
          </div>
          <div className="flex gap-2.5 items-start pl-4 mt-4 w-full">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-5 w-full font-semibold text-gray-100">
        <div className="flex flex-col justify-center w-full whitespace-nowrap">
          <div className="px-4 pt-2.5 w-full text-2xl tracking-wide leading-none">
            Platforms
          </div>
          <div className="flex flex-col self-center mt-4 max-w-full text-base w-[450px] max-sm:ml-1 max-sm:w-[344px]">
            {platforms.map((platform, index) => (
              <div key={index} className={index > 0 ? "mt-2.5" : ""}>
                <PlatformCard {...platform} />
              </div>
            ))}
          </div>
        </div>
        <button className="flex gap-2.5 justify-center items-center self-center py-4 mt-6 max-w-full text-base leading-none text-center bg-indigo-600 rounded-[44px] w-[300px]">
          <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
          <div className="self-stretch my-auto">Share with a Friend</div>
        </button>
      </div>
    </div>
  );
};