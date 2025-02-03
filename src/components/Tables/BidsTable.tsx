import { farmTypeColors } from "@/types/eums";

import { BidType } from "@/types/order";
import React from "react";
import { Edit, View } from "../Icons";

const BidsTable = ({ bids }: { bids: BidType[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Orders
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-semibold">Bid ID</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-semibold">Price (₦)</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-semibold">ETA</p>
        </div>

        <div className="col-span-1 flex items-center">
          <p className="font-semibold">Status</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-semibold">Order ID</p>
        </div>

      </div>

      {bids.length > 0 &&
        bids.map((bid, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm uppercase text-black dark:text-white">
                {bid.id.slice(0, 12)}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {bid.price}
                </p>
              </div>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {bid.eta} {bid.eta_metric}
                {bid.eta > 1 ? "s" : ""}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {bid.status}
              </p>
            </div>
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {bid.order_id.slice(0, 12)}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-end gap-4">
              
              <a href="#" className="border-gray-600 mr-2 rounded-full border px-6">
                  View
                </a>

              {/* view icon */}
              {/* <a href={"/user"} className="rounded-md border p-1">
                <View />
              </a> */}

              {/* to add Edit: col-span-1, justify-center */}
              {/* <a href={"/user"} className="rounded-md border border-meta-5 p-1">
                <Edit />
              </a> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BidsTable;
