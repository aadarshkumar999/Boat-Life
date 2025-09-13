import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const SaleIsLive = () => {
  const products = [
    {
      id: 1,
      title: "boAt Airdopes Prime 701 ANC",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/701_ANC.png?v=1756381019",
      feature: "50 Hrs Playback",
      price: "₹1,999",
      originalPrice: "₹6,999",
      discount: "50% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 2,
      title: "boAt Rockerz 450 Pro",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/files/Rockerz_450_Pro_14_1300x.png?v=1745493419",
      feature: "70 Hrs Playback",
      price: "₹1,999",
      originalPrice: "₹3,999",
      discount: "50% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 3,
      title: "boAt Nirvanaa 751 ANC",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/425.png?v=1645772065",
      feature: "65 Hrs Playback",
      price: "₹3,499",
      originalPrice: "₹7,999",
      discount: "56% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 4,
      title: "boAt Bassheads 242",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/products/e5839562-1b21-4e3f-965c-741cf758a335_600x.png?v=1625046391",
      feature: "Sweat Resistant",
      price: "₹499",
      originalPrice: "₹1,499",
      discount: "67% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 5,
      title: "boAt Airdopes 141",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/141.png?v=1756381046",
      feature: "42 Hrs Playback",
      price: "₹1,199",
      originalPrice: "₹2,999",
      discount: "60% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 6,
      title: "boAt Stone 1200",
      image:
        "https://www.boat-lifestyle.com/cdn/shop/products/e57bbbe7-5e99-4c43-8cf8-0ddd42caf3d3_600x.png?v=1633518105",
      feature: "14 W Portable Speaker",
      price: "₹2,299",
      originalPrice: "₹4,999",
      discount: "54% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 7,
      title: "boAt Wave Call Smartwatch",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LR_WC2_PLUS_medium.png?v=1734528473",
      feature: "Bluetooth Calling",
      price: "₹1,499",
      originalPrice: "₹3,999",
      discount: "62% OFF",
      buttonText: "Buy Now",
    },
    {
      id: 8,
      title: "boAt Rockerz 255 Pro+",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305_medium.jpg?v=1682573437",
      feature: "40 Hrs Playback",
      price: "₹999",
      originalPrice: "₹2,999",
      discount: "67% OFF",
      buttonText: "Buy Now",
    },
  ];

  return (
    <div className=" px-2 sm:px-10 mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Sale{" "}
          <span className="font-semibold">
            is Li
            <span className="border-b-2 border-red-500">ve</span>
          </span>
        </h1>

        <h2 className="flex items-center gap-2 text-[#2f5b96] font-bold cursor-pointer hover:underline">
          View All
          <IoIosArrowDropright />
        </h2>
      </div>

      {/* Card */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              loading="lazy"
              src={product.image}
              alt="product"
              className="w-full object-contain bg-gray-100"
            />
            <p className="text-lg font-semibold bg-yellow-500 text-white pl-3">
              {product.feature}
            </p>

            <div className="my-3 border-t-2 border-dashed border-gray-300"></div>

            <div className="ml-2">
              <p className="font-bold sm:text-2xl">{product.title}</p>
            </div>

            <div className="p-2">
              <button className="  bg-green-500 text-white px-1 py-1 sm:px-2 sm:py-2 rounded-lg font-medium hover:bg-green-400 transition">
                Buy Now
              </button>
            </div>
            {/* Price section */}
            <div className="flex flex-wrap items-center pl-2 text-center  gap-2 sm:gap-3 sm:p-2">
              <span className="sm:text-xl font-bold text-green-600">
                {product.price}
              </span>
              <span className="text-sm md:text-2xl text-gray-400 line-through">
                {product.originalPrice}
              </span>
              <span className="pb-2 text-xs text-red-500 sm:text-sm font-semibold">
                {product.discount}
              </span>
            </div>
          </div>
        ))}
        {/* card end here */}
      </div>
    </div>
  );
};

export default SaleIsLive;
