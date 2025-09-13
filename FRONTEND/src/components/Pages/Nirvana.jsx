import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Nirvana = () => {
  return (
    <div className="px-2 sm:px-10 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Explore{" "}
          <span className="font-semibold">
            Nirva
            <span className="border-b-2 border-red-500">na</span>
          </span>
        </h1>

        <h2 className="flex items-center gap-2 text-[#2f5b96] font-bold cursor-pointer hover:underline">
          View All
          <IoIosArrowDropright />
        </h2>
      </div>

      <div className="sm:p-5">
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Strips_895f0826-e273-4982-8101-433c815815c1_1600x.png"
          alt="nirvana-img"
          className="h-20 sm:h-auto w-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default Nirvana;
