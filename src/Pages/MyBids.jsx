import React, { useEffect, useState } from "react";

const MyBids = () => {
  const [myBids, setMyBids] = useState([]);
  // const [product, setProduct] = useState([]);

  console.log(myBids);
  useEffect(() => {
    fetch("http://localhost:3000/my-bids?email=ethan.brooks@gmail.com")
      .then((res) => res.json())
      .then((myBids) => setMyBids(myBids));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL No</th>
            <th>Product</th>
            <th>Seller</th>
            <th>Bid Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myBids.map((bids, index) => (
            <tr key={bids.id}>
              <td>{index + 1}</td>
              <td>
                [ Product Name ]
                <br />
                <span className="badge badge-ghost badge-sm">
                  [ Product Price Range ]
                </span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={bids.buyer_image} alt={bids.buyer_name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{bids.buyer_name}</div>
                    <div className="text-sm opacity-50">{bids.buyer_email}</div>
                  </div>
                </div>
              </td>
              <td>${bids.bid_price}</td>
              <td>
                <span className="bg-yellow-300 text-center px-4 py-2 rounded-full font-medium text-xs">
                  {bids.status}
                </span>
              </td>
              <td>
                <span className="btn btn-outline border-2 border-red-500 text-red-500">
                  Remove Bid
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
