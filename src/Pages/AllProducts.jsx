import React, { use } from "react";
import ProductCard from "./ProductCard";

const productPromise = fetch("http://localhost:3000/all-products").then((res) =>
  res.json()
);

const AllProducts = () => {
  const allProducts = use(productPromise);
  console.log(allProducts);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-10">
        All <span className="text-[#894fed]">Products</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
