import { ProduceType } from "@/types/produce";
import { TransactionType } from "@/types/transaction";

import React from "react";

const TransactionTable = ({
  transactions,
}: {
  transactions: TransactionType[];
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Transactions
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Buyer</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Produce</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Farm</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Amount</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Date</p>
        </div>
      </div>

      {transactions.length > 0 &&
        transactions.map((transaction, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {transaction.buyer_id}
                </p>
              </div>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {transaction.order.produce.name}
              </p>
            </div>
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {transaction.farmer_id}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {transaction.order.quantity} {transaction.order.quantity_metric}
                {transaction.order.quantity > 1 && "s"}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {"₦" + transaction.amount}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {new Date(transaction.created_at).toDateString()}
              </p>
            </div>

            <div className="col-span-1 flex items-center">
              <a
                href={"/user"}
                className="mr-2 rounded-full border border-gray-300 px-6 py-1 "
              >
                View
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TransactionTable;
