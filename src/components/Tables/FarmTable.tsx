import { farmTypeColors } from "@/types/eums";

import { FarmType } from "@/types/farms";
import React from "react";

const FarmTable = ({ farms }: { farms: FarmType[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Farms
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Location</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">User Type</p>
        </div>
        
      </div>

      {farms.length > 0 &&
        farms.map((farm, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {farm.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {farm.location}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p
                className={`rounded-full border px-2 text-sm capitalize text-${farmTypeColors[farm.type]}`}
              >
                {farm.type}
              </p>
            </div>
            <div className="col-span-2 flex justify-end items-center">
              <a
                href={"/user"}
                className="border-gray-600 mr-2 rounded-full border px-6 "
              >
                View
              </a>
              {/* <a
                href={""}
                className="rounded-full bg-meta-5 px-6 py-1 text-white"
              >
                Edit
              </a> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default FarmTable;
