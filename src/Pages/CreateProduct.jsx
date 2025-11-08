import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const CreateProduct = () => {
  const [condition, setCondition] = useState("Brand New");

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const min_price = form.minPrice.value;
    const max_price = form.maxPrice.value;
    const product_condition = form.productCondition.value;
    const product_usage = form.productUsageTime.value;
    const product_image = form.productImageURL.value;
    const seller_name = form.sellerName.value;
    const seller_email = form.sellerEmail.value;
    const seller_contact = form.sellerContact.value;
    const seller_image = form.sellerImageURL.value;
    const location = form.location.value;
    const product_description = form.productDescription.value;
    const newProduct = {
      title,
      category,
      min_price,
      max_price,
      product_condition,
      product_usage,
      product_image,
      seller_name,
      seller_email,
      seller_contact,
      seller_image,
      location,
      product_description,
      status: "pending",
      created_at: new Date(),
    };

    fetch("http://localhost:3000/create-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="flex justify-center">
        <button className="text-gray-600 mb-5 cursor-pointer hover:text-purple-600 mt-10">
          <Link to="/all-products" className="flex gap-1 items-center">
            <ArrowLeft size={20} />
            <span className="font-medium">Back To Products</span>
          </Link>
        </button>
      </div>

      <h1 className="font-bold text-4xl text-center mb-10">
        Create <span className="text-[#894fed]">A Product</span>
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-8">
        <form
          onSubmit={handleCreateProduct}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select
              name="category"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a Category</option>
              <option>Electronics</option>
              <option>Vehicles</option>
              <option>Musical Instruments</option>
              <option>Furniture</option>
              <option>Cooking Instruments</option>
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Min Price You want to Sale ($)
            </label>
            <input
              type="number"
              name="minPrice"
              placeholder="e.g. 18.5"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Max Price You want to Sale ($)
            </label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Optional (default = Min Price)"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Product Condition */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Condition
            </label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="productCondition"
                  value="Brand New"
                  checked={condition === "Brand New"}
                  onChange={(e) => setCondition(e.target.value)}
                  className="text-purple-500 focus:ring-purple-500"
                />
                <span>Brand New</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="productCondition"
                  value="Used"
                  checked={condition === "Used"}
                  onChange={(e) => setCondition(e.target.value)}
                  className="text-purple-500 focus:ring-purple-500"
                />
                <span>Used</span>
              </label>
            </div>
          </div>

          {/* Product Usage Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Product Usage Time
            </label>
            <input
              type="text"
              name="productUsageTime"
              placeholder="e.g. 1 year 3 month"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Product Image URL */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Your Product Image URL
            </label>
            <input
              type="url"
              name="productImageURL"
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Seller Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Seller Name
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="e.g. Artisan Roasters"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Seller Email
            </label>
            <input
              type="email"
              name="sellerEmail"
              placeholder="e.g. example@email.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Seller Contact
            </label>
            <input
              type="tel"
              name="sellerContact"
              placeholder="e.g. +1-555-1234"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Seller Image URL
            </label>
            <input
              type="url"
              name="sellerImageURL"
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="City, Country"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Simple Description about your Product
            </label>
            <textarea
              rows="3"
              name="productDescription"
              placeholder="e.g. I bought this product 3 month ago..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Create A Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
