import React, { use } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const productPromise = fetch("http://localhost:3000/recent-products").then(
  (res) => res.json()
);

const HomePageProducts = () => {
  const recentProducts = use(productPromise);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-10">
        Recent <span className="text-[#894fed]">Products</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>

      <div className="flex justify-center mt-6 mb-10">
        <button className="px-8 py-3 text-center cursor-pointer mt-4 bg-linear-to-r from-purple-600 to-indigo-500 text-white rounded-lg font-medium hover:opacity-90 transition">
          <Link to="/all-products">See All Products</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePageProducts;
