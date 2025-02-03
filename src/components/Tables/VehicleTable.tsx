import { VehicleType } from "@/types/vehicle";
import React from "react";

const VehicleTable = ({ vehicles }: { vehicles: VehicleType[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Vehicle
        </h4>
      </div>

      {/* id: string;
      name: string;
      type: string;
      plate_number: string;
      status: string;
      location: string;
      photos: string[];
      transporter_id: string;
      created_at: string; */}

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Type</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Location</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">License Number</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Transporter</p>
        </div>
      </div>

      {vehicles.length > 0 &&
        vehicles.map((vehicle, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {vehicle.name}
                </p>
              </div>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {vehicle.type}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {vehicle.location}
              </p>
            </div>
            <div className="col-span-1 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {vehicle.plate_number}
              </p>
            </div>
            <div className="col-span-2 items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {vehicle.transporter_id}
              </p>
            </div>

            <div className="col-span-2 flex justify-end items-center">
              <a
                href={"#"}
                className="border-gray-300 mr-2 rounded-full border px-6 py-1"
              >
                View
              </a>
              {/* to add Edit: col-span-1, justify-center */}
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

export default VehicleTable;
