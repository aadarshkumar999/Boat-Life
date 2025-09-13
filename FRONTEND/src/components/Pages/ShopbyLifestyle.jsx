import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const ShopbyLifestyle = () => {
  const LifeStyle = [
    {
      id: 1,
      name: "For Fitness",
      link: "https://www.boat-lifestyle.com/cdn/shop/files/jemmi_d1dd51d5-8b8b-47ad-9920-f8594669cbb2.png?v=1726059408",
    },
    {
      id: 2,
      name: "For Parties",
      link: "https://www.boat-lifestyle.com/cdn/shop/files/Ranveer.png?v=1726038549",
    },
    {
      id: 3,
      name: "For Work",
      link: "https://www.boat-lifestyle.com/cdn/shop/files/Aman.png?v=1726038424",
    },
    {
      id: 4,
      name: "For Audiophiles",
      link: "https://www.boat-lifestyle.com/cdn/shop/files/YJ.png?v=1726059363",
    },
  ];

  return (
    <div className="px-2 sm:px-10 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Shop By{" "}
          <span className="font-semibold">
            LifeSty<span className="border-b-2 border-red-500">le</span>
          </span>
        </h1>

        <h2 className="flex items-center gap-2 text-[#2f5b96] font-bold cursor-pointer hover:underline">
          View All
          <IoIosArrowDropright />
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 cursor-pointer">
        {LifeStyle.map((lifestyle, id) => (
          <div key={id} className="">
            <img
              src={lifestyle.link}
              alt={lifestyle.name}
              loading="lazy"
              width="322"
              height="429"
              className="w-full "
            ></img>
            <div className="w-auto bg-gray-500 flex flex-col items-center justify-center p-2 rounded-b-2xl ">
              <h1 className="font-bold">{lifestyle.name}</h1>
              <p className="text-blue-400 cursor-pointer">View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopbyLifestyle;
