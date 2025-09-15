import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading"

const ExploreElectronics = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await fetch(
          "https://fake-store-api.mock.beeceptor.com/api/products"
        );
        const result = await response.json();
        setProducts(result);
        setLoading(false)
        //console.log(result);
      } catch (error) {
        console.log("errori category ", error);
        setLoading(false)
      }
    };
    apiData();
  }, []);

  if (loading) {
   return <div> <Loading/> </div>
  }
  return (
    <div className=" px-2 sm:px-10 mb-10">
      {/*  */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Buy Electronics{" "}
          <span className="font-semibold">
             Produ
            <span className="border-b-2 border-red-500">cts</span>
          </span>
        </h1>

        <h2 className="flex items-center gap-2 text-[#2f5b96] font-bold cursor-pointer hover:underline">
          View All
          <IoIosArrowDropright />
        </h2>
      </div>
      {/* end */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <Link
            key={product.product_id}
            to={`/product/se/${product.product_id}`}
            target="_blank"
          >
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="bg-gray-100 flex items-center justify-center h-56">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                  className="max-h-52 object-contain"
                />
              </div>

              {/*  */}
              <div className="flex flex-col flex-1 p-4">
                <h2 className="font-bold text-lg sm:text-xl line-clamp-2">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="mt-2 text-sm text-gray-600">
                  <span className="font-medium flex items-center gap-1">
                    {product.rating}
                    <FaStar className="text-yellow-400" />
                  </span>
                  <span className="text-gray-400">
                    ({product.reviews?.rating} reviews)
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

export default ExploreElectronics;
