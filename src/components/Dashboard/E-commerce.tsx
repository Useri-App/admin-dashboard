import dynamic from "next/dynamic";
import React from "react";
import CardDataStats from "../CardDataStats";
import UserTable from "../Tables/UserTable";
import { UserData } from "@/types/user";
import { OrderType } from "@/types/order";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const Dashboard: React.FC<{users: UserData[], orders: OrderType[], totalUsers: number, totalFarms: number}> = ({users, orders, totalUsers, totalFarms} ) => {
  const stats = {
    totalSales: '0.00',
    users: totalUsers,
    farms: totalFarms,
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats
          title="Total Sales"
          total={`₦${stats.totalSales}`}
          rate="34.35%"
        >
          <svg
            className="fill-primary dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 31 31"
            fill=""
          >
            <path
              d="M19.6282 7.6615H22.6801L22.6276 5.8025H20.0477L22.4724 0.791286L19.7292 0.561741L17.3198 2.40861L18.1232 0.320071L15.3114 0L14.3892 2.60987L12.8737 0.589221L8.70483 0.444543L11.4633 5.80331L8.97316 5.72329V7.66069H11.3728C6.25506 10.6561 2.56787 18.4857 2.56787 22.7153C2.56787 28.0175 8.35809 31 15.4997 31C22.6413 31 28.4315 28.0175 28.4315 22.7153C28.4323 18.4857 24.7459 10.6569 19.6282 7.6615ZM16.5811 25.2589V27.0945H14.8167V25.385C13.6108 25.3325 12.4405 25.0059 11.7567 24.6115L12.2966 22.5068C13.0523 22.9214 14.1152 23.2981 15.2847 23.2981C16.3104 23.2981 17.0127 22.902 17.0127 22.1835C17.0127 21.4973 16.4372 21.0649 15.1053 20.6163C13.1784 19.9689 11.865 19.0677 11.865 17.3234C11.865 15.7392 12.9812 14.4961 14.9073 14.1195V12.4092H16.6716V13.9934C17.8767 14.0484 18.6882 14.2981 19.2814 14.5867L18.7593 16.6211C18.2913 16.4238 17.4629 16.0084 16.1673 16.0084C14.997 16.0084 14.6187 16.5119 14.6187 17.0155C14.6187 17.6104 15.2491 17.9878 16.7791 18.5641C18.9202 19.3223 19.785 20.31 19.785 21.9313C19.7858 23.5309 18.651 24.8993 16.5811 25.2589Z"
              fill=""
            />
          </svg>
        </CardDataStats>
        <CardDataStats title="Users" total={String(stats.users)} rate="2.59%" levelUp>
          <svg
            className="stroke-primary dark:stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 28 30"
            fill="none"
          >
            <path
              d="M25.3333 27.75V24.9167C25.3333 23.4138 24.7363 21.9724 23.6736 20.9097C22.6109 19.847 21.1696 19.25 19.6667 19.25H8.33333C6.83044 19.25 5.3891 19.847 4.32639 20.9097C3.26369 21.9724 2.66667 23.4138 2.66667 24.9167V27.75M19.6667 7.91667C19.6667 11.0463 17.1296 13.5833 14 13.5833C10.8704 13.5833 8.33333 11.0463 8.33333 7.91667C8.33333 4.78705 10.8704 2.25 14 2.25C17.1296 2.25 19.6667 4.78705 19.6667 7.91667Z"
              stroke=""
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Registered Farms"
          total={String(stats.farms)}
          rate="2.95%"
          levelDown
        >
          <svg
            className="stroke-primary dark:stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M17.5 2.91663L22.0062 12.0458L32.0833 13.5187L24.7917 20.6208L26.5125 30.6541L17.5 25.9145L8.48749 30.6541L10.2083 20.6208L2.91666 13.5187L12.9937 12.0458L17.5 2.91663Z"
              stroke=""
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <UserTable users={users} />
        </div>

        <div className="col-span-12 rounded-lg border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6 xl:pb-1">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Orders{" "}
            <span
              className="rounded-sm bg-meta-3 px-1 py-[2px] text-[10px] font-normal text-white"
              style={{ verticalAlign: "super" }}
            >
              Recent
            </span>
          </h4>
          {orders.map((order, key) => (
            <div
              key={key}
              className={`mb-2 flex items-center justify-between rounded-xl border border-gray-100 p-4 dark:border-strokedark`}
            >
              <div className="">
                <p className="dark:text-white">
                  {new Date(order.created_at).toDateString()}
                </p>
              </div>

              <div className="">
                <p
                  className={`inline-block rounded-sm px-3 py-1 text-base capitalize `}
                >
                  {/* 200 tubers of yam by Emeka Nwokolo */}
                  {order.quantity} {order.quantity_metric}
                  {order.quantity > 1 && "s"} {order.produce.name}
                  {" by "}
                  {order.buyer.name}
                </p>
              </div>
              <a
                href={"#"}
                className="rounded-md bg-warning px-6 py-1 text-white"
              >
                View
              </a>
            </div>
          ))}

          <div className="my-6 border-t border-stroke pt-4 flex items-center justify-end gap-4">  
            <a href="/orders" className="text-md border-gray-600 rounded-md border px-4">
              View All Orders
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
