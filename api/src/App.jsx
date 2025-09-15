import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(response.data);

        const result = await response.json();
        console.log(result);
        setProduct(result);
        setLoading(false);
      } catch (error) {
        console.log("error in api", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>App</h1>
      {product.map((product) => (
        <div key={product.title}>
          <h1>Title : {product.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
