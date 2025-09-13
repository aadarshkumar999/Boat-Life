import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

const TopPicksForYou = () => {
  const [activeTab, setActiveTab] = useState("New Launches");

  const tabs = ["New Launches", "Personalisation"];

  const products = [
    {
      id: 1,
      title: "boAt Aavante 2.1 1650",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/RPD_Aavante_2.1_1650.png?v=1756711893",
      feature: "1.9'' HD Display",
      price: "₹2,499",
      originalPrice: "₹6,999",
      discount: "64% OFF",
      buttonText: "Buy Now",
      category: "New Launches",
    },
    {
      id: 2,
      title: "Bassheads 213L",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/213L.png?v=1756462269",
      feature: "Personalised Design",
      price: "₹1,799",
      originalPrice: "₹3,499",
      discount: "49% OFF",
      buttonText: "Buy Now",
      category: "New Launches",
    },
    {
      id: 3,
      title: "boAt Aavante Bar Joy",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/FIs_aavante_joy__1.png?v=1756207675",
      feature: "45 Hours Playback",
      price: "₹899",
      originalPrice: "₹3,990",
      discount: "77% OFF",
      buttonText: "Buy Now",
      category: "New Launches",
    },
    {
      id: 4,
      title: "boAt Bassheads 211",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_Bassheads_211.png?v=1756290047",
      feature: "50 Hours Playback",
      price: "₹1,599",
      originalPrice: "₹5,990",
      discount: "73% OFF",
      buttonText: "Buy Now",
      category: "New Launches",
    },
    {
      id: 5,
      title: "boAt Airdopes Alpha Gen 2",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle_1_22d9c013-0c36-4227-b7ed-6e55db1b1d80.png?v=1756201512",
      feature: "In‑Built Mic",
      price: "₹349",
      originalPrice: "₹599",
      discount: "42% OFF",
      buttonText: "Buy Now",
      category: "New Launches",
    },
    {
      id: 6,
      title: "boAt Airdopes Prime 511",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Prime_115.png?v=1756109823",
      feature: "In‑Built Mic",
      price: "₹699",
      originalPrice: "₹990",
      discount: "29% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 7,
      title: "boAt Aavante 2.1 1650",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/RPD_Aavante_2.1_1650.png?v=1756711893",
      feature: "160W R.M.S",
      price: "₹6,999",
      originalPrice: "₹27,990",
      discount: "75% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 8,
      title: "boAt Airdopes 161",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.png?v=1745235467",
      feature: "40 Hours Playback",
      price: "₹999",
      originalPrice: "₹2,490",
      discount: "60% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 9,
      title: "boAt Nirvana Ion ANC",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ion_anc_1.png?v=1740725927",
      feature: "Noise Cancellation",
      price: "₹1,999",
      originalPrice: "₹9,990",
      discount: "80% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 10,
      title: "boAt Airdopes 141",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/141_ls.jpg?v=1741083860",
      feature: "42 Hours Playback",
      price: "₹1,099",
      originalPrice: "₹4,490",
      discount: "76% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 11,
      title: "boAt Airdopes 131",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
      feature: "60 Hours Playback",
      price: "₹699",
      originalPrice: "₹2,990",
      discount: "77% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 12,
      title: "boAt Airdopes 148",
      image: "https://www.boat-lifestyle.com/cdn/shop/files/Airdopes148.png",
      feature: "42 Hours Playback",
      price: "₹1,399",
      originalPrice: "₹4,490",
      discount: "69% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
    {
      id: 13,
      title: "boAt Airdopes 163",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-163.jpg?v=1682408982",
      feature: "17 Hours Playback",
      price: "₹1,459",
      originalPrice: "₹2,490",
      discount: "41% OFF",
      buttonText: "Buy Now",
      category: "Personalisation",
    },
  ];

  const filterForYou = products.filter((p) => p.category === activeTab);

  return (
    <div className="px-2 sm:px-10 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Top Picks{" "}
          <span className="font-semibold">
            Fory
            <span className="border-b-2 border-red-500">ou</span>
          </span>
        </h1>

        <h2 className="flex items-center gap-2 text-[#2f5b96] font-bold cursor-pointer hover:underline">
          View All
          <IoIosArrowDropright />
        </h2>
      </div>

      <div className="">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${
              activeTab === tab
                ? "bg-gray-500 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-200 hover:rounded-2xl"
            }  `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">
        {filterForYou.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
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
              <button className="bg-green-500 text-white px-2 py-2 rounded-lg font-medium hover:bg-green-400 transition">
                Buy Now
              </button>
            </div>

            <div className="flex items-center gap-3 p-2">
              <span className="sm:text-xl font-bold text-green-600">
                {product.price}
              </span>
              <span className="text-sm md:text-2xl text-gray-400 line-through">
                {product.originalPrice}
              </span>
              <span className="text-red-500 text-sm font-semibold">
                {product.discount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksForYou;
