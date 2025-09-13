import React from "react";

const InThePress = () => {
  return (
    <div className="px-2 sm:px-10 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          In the{" "}
          <span className="font-semibold">
            Pre
            <span className="border-b-2 border-red-500">ss</span>
          </span>
        </h1>
      </div>

      <div className="bg-gray-200 px-10 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/Business_World_231x.png?v=1705038093"
              alt="Business World"
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              deserunt consequatur sit, iusto ipsam voluptate veniam,
              accusantium repellendus recusandae possimus magnam debitis libero
              dolorum aut sint dicta? Aliquam, quas aperiam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InThePress;
