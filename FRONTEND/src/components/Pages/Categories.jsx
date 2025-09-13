import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Categories = ({ hideOnMobile = false }) => {
  const categories = [
    {
      name: "True Wireless Earbuds",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
    },
    {
      name: "Neckbands",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
    },
    {
      name: "Smart Watches",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853",
    },
    {
      name: "Nirvana",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/nirvana_52689447-c1bb-4bb8-8fa0-0496e3715fc0_small.png?v=1727229889",
    },
    {
      name: "Wireless Headphones",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
    },
    {
      name: "Wireless Speakers",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
    },
    {
      name: "Wired Headphones",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
    },
    {
      name: "Wired Earphones",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854",
    },
    {
      name: "Soundbars",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854",
    },
  ];

  return (
    <div
      className={`${
        hideOnMobile ? "hidden sm:block" : "block"
      } px-4 sm:px-10 mb-10`}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Short By{" "}
          <span className="font-semibold">
            Categori
            <span className="border-b-2 border-red-500">es</span>
          </span>
        </h1>

        <h2 className="flex items-center gap-2 text-[#2f5b96] font-bold cursor-pointer hover:underline">
          View All
          <IoIosArrowDropright />
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img
              loading="lazy"
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-contain"
            />
            <p className="font-semibold mt-2 text-sm sm:text-base">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* end here */}
    </div>
  );
};

export default Categories;
