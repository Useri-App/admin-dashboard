import Image from "next/image";
import { enumColors } from "@/types/eums";

import { UserData } from "@/types/user";
import React from "react";
import { UserRole } from "@/types/user-roles";

const TableTwo = ({ data }: { data: UserData[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Users
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Phone</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">User Type</p>
        </div>

        <div className="col-span-2 flex items-center">
          <p className="font-medium">Status</p>
        </div>
      </div>

      {data &&
        data.map((user, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-2 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {user.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">{user.phone}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">{user.email}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p
                className={`rounded-full border border-${enumColors[user.role as UserRole]} px-2 text-sm capitalize text-${enumColors[user.role as UserRole]}`}
              >
                {user.role}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">{user.verified? "Verified" : ""}</p>
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <a
                href={`/users/${user.id}`}
                className="mr-2 rounded-full border border-gray-600 px-6 "
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

export default TableTwo;
