import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
        

        setLoading(false);
      } catch (error) {
        console.log("Error while featching one product", error);
        setLoading(false);
      }
    };

    fetchOneProduct();
  }, [id]);

  if (loading) {
    return <div className="mt-10"><Loading/></div>;
    
  }

  if (!product) {
    return <h1>Product not Ab...</h1>;
  }

  return (
    <div className="p-6 rounded-2xl shadow-2xl">
  <div className="flex flex-col md:flex-row gap-6">
    
    <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl p-6">
      <img
        src={product.image}
        alt={product.title}
        className="max-h-96 object-contain"
      />
    </div>

    
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>

      <div className="text-2xl font-bold text-green-600 mb-3">
         &#8377; {product.price}
      </div>

      <div className="text-sm text-gray-500 mb-4">
        Rating:{" "}
        <span className="font-medium">{product.rating?.rate}</span>{" "}
        ({product.rating?.count} reviews)
      </div>

      {/* btn */}
      <div className="flex items-center gap-3">
        <button className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Buy Now
        </button>
        <button className="bg-yellow-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductDetail;
