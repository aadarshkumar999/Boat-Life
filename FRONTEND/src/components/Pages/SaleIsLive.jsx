import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FaMale } from "react-icons/fa";
import { GiNecklaceDisplay, GiDress } from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";

const SaleIsLive = () => {
  // const products = [

  //   {
  //     id: 1,
  //     title: "boAt Airdopes Prime 701 ANC",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/701_ANC.png?v=1756381019",
  //     feature: "50 Hrs Playback",
  //     price: "₹1,999",
  //     originalPrice: "₹6,999",
  //     discount: "50% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 2,
  //     title: "boAt Rockerz 450 Pro",
  //     image:
  //       "https://www.boat-lifestyle.com/cdn/shop/files/Rockerz_450_Pro_14_1300x.png?v=1745493419",
  //     feature: "70 Hrs Playback",
  //     price: "₹1,999",
  //     originalPrice: "₹3,999",
  //     discount: "50% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 3,
  //     title: "boAt Nirvanaa 751 ANC",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/425.png?v=1645772065",
  //     feature: "65 Hrs Playback",
  //     price: "₹3,499",
  //     originalPrice: "₹7,999",
  //     discount: "56% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 4,
  //     title: "boAt Bassheads 242",
  //     image:
  //       "https://www.boat-lifestyle.com/cdn/shop/products/e5839562-1b21-4e3f-965c-741cf758a335_600x.png?v=1625046391",
  //     feature: "Sweat Resistant",
  //     price: "₹499",
  //     originalPrice: "₹1,499",
  //     discount: "67% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 5,
  //     title: "boAt Airdopes 141",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/141.png?v=1756381046",
  //     feature: "42 Hrs Playback",
  //     price: "₹1,199",
  //     originalPrice: "₹2,999",
  //     discount: "60% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 6,
  //     title: "boAt Stone 1200",
  //     image:
  //       "https://www.boat-lifestyle.com/cdn/shop/products/e57bbbe7-5e99-4c43-8cf8-0ddd42caf3d3_600x.png?v=1633518105",
  //     feature: "14 W Portable Speaker",
  //     price: "₹2,299",
  //     originalPrice: "₹4,999",
  //     discount: "54% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 7,
  //     title: "boAt Wave Call Smartwatch",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LR_WC2_PLUS_medium.png?v=1734528473",
  //     feature: "Bluetooth Calling",
  //     price: "₹1,499",
  //     originalPrice: "₹3,999",
  //     discount: "62% OFF",
  //     buttonText: "Buy Now",
  //   },
  //   {
  //     id: 8,
  //     title: "boAt Rockerz 255 Pro+",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305_medium.jpg?v=1682573437",
  //     feature: "40 Hrs Playback",
  //     price: "₹999",
  //     originalPrice: "₹2,999",
  //     discount: "67% OFF",
  //     buttonText: "Buy Now",
  //   },
  // ];

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [filterProducts, setFilterProducts] = useState([]);

  // category name
  const categoryName = [
    { name: "All", icon: null },
    { name: "men's clothing", icon: <FaMale className="text-sm sm:text-lg" /> },
    {
      name: "jewelery",
      icon: <GiNecklaceDisplay className="text-sm sm:text-lg" />,
    },
    {
      name: "electronics",
      icon: <MdDevicesOther className="text-sm sm:text-lg" />,
    },
    {
      name: "women's clothing",
      icon: <GiDress className="text-sm sm:text-lg" />,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response.data);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log("ss", result);
        setProduct(result);
        setFilterProducts(result);
        setLoading(false);
      } catch (error) {
        console.log("error in api", error);
        setLoading(false);
      }
    };

    // return () => {
    //   //second;
    // };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-10">
        <Loading />
      </div>
    );
  }

  const handlerFilter = (category) => {
    setActiveTab(category);

    if (category === "All") {
      setFilterProducts(product);
    } else {
      setFilterProducts(product.filter((p) => p.category === category));
    }
  };

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

      <div className="flex gap-2 sm:gap-4 flex-wrap">
        {categoryName.map((cate) => (
          <button
            key={cate.name}
            onClick={()=> handlerFilter(cate.name)}
            className={`flex items-center gap-0 sm:gap-2 border-1 outline-amber-500 border-black py-1 px-2 sm:py-2 sm:px-4 font-medium rounded-2xl hover:bg-red-500 hover:text-white hover:border-none
        ${
          activeTab == cate.name
            ? "bg-red-500 text-white border-none"
            : "hover:bg-red-500 hover:text-white"
        }`}
          >
            {/* <FaMale className="text-sm sm:text-lg" /> */}
            {cate.icon} {cate.name}  
          </button>
        ))}
      </div>

      {/* Card start from here */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filterProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} target="_blank">
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="bg-gray-100 flex items-center justify-center h-56">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.title}
                  className="max-h-52 object-contain"
                />
              </div>

              {/*  */}
              <div className="flex flex-col flex-1 p-4">
                <h2 className="font-bold text-lg sm:text-xl line-clamp-2">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="mt-2 text-sm text-gray-600">
                  <span className="font-medium flex items-center gap-1">
                    {product.rating.rate}
                    <FaStar className="text-yellow-400" />
                  </span>
                  <span className="text-gray-400">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                {/*  */}
                <div className="flex items-center justify-between mt-auto pt-4 gap-2">
                  <span className="sm:text-xl font-bold text-green-600">
                    ₹{product.price}
                  </span>
                  <button className="bg-green-500 text-white text-sm px-2 sm:px-4 sm:py-4 rounded-lg font-medium hover:bg-green-600 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SaleIsLive;
