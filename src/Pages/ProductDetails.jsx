import React from "react";
import { Link, useLoaderData } from "react-router";
import { ArrowLeft } from "lucide-react";

const ProductDetails = () => {
  const { result } = useLoaderData();
  const product = result;

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 rounded-xl shadow-sm p-8">
      {/* Back Button */}
      <button className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer hover:text-purple-600">
        <Link to="/all-products" className="flex gap-1 items-center">
          <ArrowLeft size={20} />
          <span className="font-medium">Back To Products</span>
        </Link>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div>
          {/* Product Image */}
          <div className="bg-gray-200 h-[380px] rounded-lg overflow-hidden mb-5">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Description */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Product Description
            </h3>

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                <span className="font-medium text-purple-700">Condition:</span>{" "}
                {product.condition === "fresh" ? "New" : "Used"}
              </span>
              <span>
                <span className="font-medium text-purple-700">Usage Time:</span>{" "}
                {product.usage}
              </span>
            </div>
            <hr className="mb-3" />

            <p className="text-sm text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.title} For Sale
          </h1>
          <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>

          <div className="mt-4 text-green-600 text-2xl font-semibold">
            ${product.price_min} - {product.price_max}
          </div>
          <p className="text-gray-500 text-sm mb-4">Price starts from</p>

          {/* Product Details */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Product Details
            </h3>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Product ID:</span> {product._id}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Posted:</span>{" "}
              {new Date(product.created_at).toLocaleDateString()}
            </p>
          </div>

          {/* Seller Information */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">
              Seller Information
            </h3>

            <div className="flex items-center gap-3 mb-3">
              <img
                src={product.seller_image}
                alt={product.seller_name}
                className="w-12 h-12 rounded-full border"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {product.seller_name}
                </p>
                <p className="text-sm text-gray-500">{product.email}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              <span className="font-medium">Location:</span> {product.location}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Contact:</span>{" "}
              {product.seller_contact}
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Status:</span>{" "}
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-md text-xs">
                {product.status}
              </span>
            </p>
          </div>

          {/* Buy Button */}
          <button className="w-full cursor-pointer mt-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg font-medium hover:opacity-90 transition">
            I Want To Buy This Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
