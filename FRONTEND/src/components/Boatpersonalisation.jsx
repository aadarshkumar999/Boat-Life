import React from "react";
import { FaStar } from "react-icons/fa6";

const Boatpersonalisation = () => {
  const products = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/701_ANC.png?v=1756381019",
      feature: "40 Hours Playback",
      engraving: true,
      rating: 4.8,
      reviews: "500",
      bestSeller: true,
      title: "boAt Airdopes 161",
      price: "₹999",
      originalPrice: "₹2,490",
      discount: "60% off",
      tags: ["ASAP™ Charge", "IWP Technology"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ion_anc_1.png?v=1740725927",
      feature: "120 Hours Playback",
      engraving: true,
      rating: 4.9,
      reviews: "279",
      bestSeller: false,
      title: "boAt Nirvana Ion ANC",
      price: "₹1,999",
      originalPrice: "₹9,990",
      discount: "80% off",
      tags: ["BEAST™ Mode", "Noise Cancellation"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_141.png?v=1756381019",
      feature: "42 Hours Playback",
      engraving: true,
      rating: 4.8,
      reviews: "7568",
      bestSeller: true,
      title: "boAt Airdopes 141",
      price: "₹1,099",
      originalPrice: "₹4,490",
      discount: "76% off",
      tags: ["Clear Calling", "ASAP™ Charge"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
      feature: "60 Hours Playback",
      engraving: true,
      rating: 4.8,
      reviews: "14650",
      bestSeller: true,
      title: "boAt Airdopes 131",
      price: "₹699",
      originalPrice: "₹2,990",
      discount: "77% off",
      tags: ["13mm Drivers", "IVP Technology"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_148.jpg?v=1698909797",
      feature: "42 Hours Playback",
      engraving: true,
      rating: 5.0,
      reviews: "120",
      bestSeller: false,
      title: "boAt Airdopes 148",
      price: "₹1,399",
      originalPrice: "₹4,490",
      discount: "69% off",
      tags: ["Clear Calling", "ASAP™ Charge"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-163.jpg?v=1682408982",
      feature: "17 Hours Playback",
      engraving: true,
      rating: 4.8,
      reviews: "1096",
      bestSeller: false,
      title: "boAt Airdopes 163",
      price: "₹1,459",
      originalPrice: "₹2,490",
      discount: "41% off",
      tags: ["boAt Immersive Sound", "IVP Technology"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB400.png?v=1756381019",
      feature: "20000mAh Power Bank",
      engraving: true,
      rating: 4.7,
      reviews: "438",
      bestSeller: false,
      title: "boAt Energyshroom PB400",
      price: "₹1,699",
      originalPrice: "₹4,490",
      discount: "62% off",
      tags: ["2-Way Fast Charging", "Smart IC Protection"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_138.jpg?v=1698402384",
      feature: "60 Hours Playback",
      engraving: true,
      rating: 4.9,
      reviews: "146",
      bestSeller: false,
      title: "boAt Airdopes 138",
      price: "₹1,399",
      originalPrice: "₹2,990",
      discount: "53% off",
      tags: ["13mm Drivers", "boAt Signature Sound"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
      feature: "120 Hours Playback",
      engraving: true,
      rating: 4.9,
      reviews: "132",
      bestSeller: false,
      title: "boAt Nirvana Ion",
      price: "₹1,799",
      originalPrice: "₹7,990",
      discount: "77% off",
      tags: ["ENx™ Technology", "BEAST™ Mode", "Dual EQ Modes"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ivy_pro_LR.png?v=1751528349",
      feature: "50 Hours Playback",
      engraving: true,
      rating: 4.6,
      reviews: "590",
      bestSeller: false,
      title: "boAt Nirvana Ivy Pro",
      price: "₹4,999",
      originalPrice: "₹17,490",
      discount: "72% off",
      tags: ["Adaptive Hybrid ANC", "Dual Drivers"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB300.png?v=1756381019",
      feature: "10000mAh Power Bank",
      engraving: true,
      rating: 4.6,
      reviews: "286",
      bestSeller: false,
      title: "boAt EnergyShroom PB300",
      price: "₹1,299",
      originalPrice: "₹3,290",
      discount: "60% off",
      tags: ["22.5W Fast Charging", "Smart IC Protection"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_138_Pro.jpg?v=1702618467",
      feature: "45 Hours Playback",
      engraving: true,
      rating: 4.8,
      reviews: "326",
      bestSeller: false,
      title: "boAt Airdopes 138 PRO",
      price: "₹1,599",
      originalPrice: "₹2,990",
      discount: "47% off",
      tags: ["13mm Drivers", "Clear Calling", "BEAST™ Mode"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IVY_6_-_NEW-BLACK.png?v=1725530531",
      feature: "50 Hours Playback",
      engraving: true,
      rating: 4.5,
      reviews: "118",
      bestSeller: false,
      title: "boAt Nirvana Ivy",
      price: "₹3,299",
      originalPrice: "₹17,990",
      discount: "82% off",
      tags: ["Noise Cancellation", "ENx™ Tech", "BEAST™ Mode"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_170.jpg?v=1703224914",
      feature: "50 Hours Playback",
      engraving: true,
      rating: 4.9,
      reviews: "436",
      bestSeller: false,
      title: "boAt Airdopes 170",
      price: "₹1,459",
      originalPrice: "₹3,190",
      discount: "54% off",
      tags: ["ENx™ Technology", "BEAST™ Mode", "13mm Drivers"],
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
      feature: "45 Hours Playback",
      engraving: true,
      rating: 4.9,
      reviews: "2038",
      bestSeller: true,
      title: "boAt Airdopes 131 PRO",
      price: "₹1,099",
      originalPrice: "₹2,990",
      discount: "63% off",
      tags: ["Clear Calling", "BEAST™ Mode"],
    },
  ];

  return (
    <div className="px-2 sm:px-10 py-10">
      <h1 className="text-xl font-bold mb-6">
        Special Range — Personalised Products
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                loading="lazy"
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain bg-red-100"
              />
              {/* Engraving Badge */}
              {product.engraving && (
                <span className="absolute top-2 left-2 bg-black text-xs text-white px-2 py-1 rounded-md">
                  Engraving Available
                </span>
              )}
              {/* Playback Badge */}
              <p className="absolute bottom-0 w-full text-center bg-yellow-400 text-black font-semibold py-1">
                {product.feature}
              </p>
            </div>

            {/* Rating + Best Seller */}
            <div className="flex justify-between items-center px-3 mt-2">
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <FaStar size={14} />
                <span className="font-medium">{product.rating}</span>
                <span className="text-green-600">| {product.reviews}</span>
              </div>
              {product.bestSeller && (
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded">
                  Best seller
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="px-3 mt-2 font-bold text-lg">{product.title}</h3>

            {/* Price Section */}
            <div className="flex items-center text-sm gap-3 px-3 mt-1">
              <span className="text-xl font-bold text-green-600">
                {product.price}
              </span>
              <span className="text-gray-400 line-through">
                {product.originalPrice}
              </span>
              <span className="text-red-500 font-semibold">
                {product.discount}
              </span>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap px-3 mt-2">
              {product.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-2 py-1 rounded-lg text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="p-3">
              <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                {product.bestSeller ? "View Product" : "Add To Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boatpersonalisation;
