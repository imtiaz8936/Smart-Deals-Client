import React from "react";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const { result } = useLoaderData();

  const {
    title,
    image,
    category,
    price_min,
    price_max,
    seller_name,
    seller_image,
    email,
    seller_contact,
    location,
    condition,
    usage,
    description,
    created_at,
    status,
  } = result;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-3xl mx-auto mt-6">
      {/* Product Image */}
      <div className="w-full h-72 bg-gray-200 rounded-xl overflow-hidden mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Product Title & Category */}
      <div className="flex flex-wrap justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Price Range */}
      <p className="text-purple-600 font-bold text-xl mb-4">
        ${price_min} - {price_max}
      </p>

      {/* Condition & Usage */}
      <div className="flex flex-wrap gap-6 text-gray-700 mb-4">
        <p>
          <span className="font-medium text-gray-800">Condition:</span>{" "}
          {condition === "fresh" ? "Fresh" : "Used"}
        </p>
        <p>
          <span className="font-medium text-gray-800">Usage:</span> {usage}
        </p>
        <p>
          <span className="font-medium text-gray-800">Status:</span> {status}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Seller Info */}
      <div className="border-t pt-5 flex flex-wrap items-center gap-5">
        <img
          src={seller_image}
          alt={seller_name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{seller_name}</h3>
          <p className="text-gray-600 text-sm">{email}</p>
          <p className="text-gray-600 text-sm">{seller_contact}</p>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>

      {/* Posted Date */}
      <p className="mt-6 text-sm text-gray-500">
        Posted on {new Date(created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ProductDetails;
