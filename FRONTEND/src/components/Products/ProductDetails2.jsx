import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ProductDetails2 = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await fetch(
          `https://fake-store-api.mock.beeceptor.com/api/products/${id}`
        );
        const data = await response.json();

      
        const foundProduct = data.find((p) => p.product_id === parseInt(id));
        setProduct(foundProduct);

      // console.log(" Product:--", foundProduct);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching one product", error);
        setLoading(false);
      }
    };

    fetchOneProduct();
  }, [id]);

  if (loading) return <div className="mt-10"><Loading /></div>;
  if (!product) return <h1 className="text-red-500 text-5xl">Product not found...</h1>;

  return (
  <div className="p-6 rounded-2xl shadow-2xl bg-white max-w-6xl mx-auto mt-6">
  <div className="flex flex-col md:flex-row gap-6">
    
    {/* Product Image */}
    <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl p-6 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-96 object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Product Info */}
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>

        {/* Price */}
        <div className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          ₹{product.price}
        </div>

        {/* Rating */}
        <div className="text-sm md:text-base text-gray-500 mb-6 flex items-center gap-2">
          Rating: <span className="font-medium">{product.rating?.rate || product.rating}</span>
          ({product.reviews.rating || 0} reviews)
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
        <button className="bg-green-500 w-full sm:w-auto text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition">
          Buy Now
        </button>
        <button className="bg-yellow-500 w-full sm:w-auto text-white px-6 py-3 rounded-xl font-medium hover:bg-yellow-600 transition">
          Add to Cart
        </button>
      </div>
    </div>

  </div>
</div>


  );
};

export default ProductDetails2;
