import React from "react";

const ProductCard = ({ product }) => {
  const { title, price_min, price_max, image, condition } = product;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="w-full h-52 bg-gray-200 rounded-xl overflow-hidden mb-3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Status */}
      <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full w-max mb-2 font-medium">
        On Sale
      </span>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 leading-snug mb-1">
        {title} [ {condition === "fresh" ? "Fresh" : "Used"} Condition ]
      </h2>

      {/* Price */}
      <p className="text-purple-600 font-bold text-lg mb-3">
        ${price_min} - {price_max}
      </p>

      {/* View Details Button */}
      <button className="mt-auto border border-purple-500 text-purple-600 font-medium py-2 rounded-md hover:bg-purple-600 hover:text-white transition-colors duration-300">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
