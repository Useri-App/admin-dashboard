import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetcher } from "@/util/requester";

export const metadata: Metadata = {
  title: "Order Details - Useri Dashboard",
  description: "",
};

const FormLayout = async ({params}: {params: {slug: string}}) => {


  const token = cookies().get("token")?.value
  
  if(!token) redirect("/login")
  
  const order = (await fetcher(`order/${params.slug}`, token)).data

  // const order = {
  //   id: "TacrSMdITaWvEgW",
  //   status: "accepted",
  //   quantity: 10,
  //   quantity_metric: "bag",
  //   amount: 120000,
  //   need_logistics: true,
  //   produce_id: "ugHEallR66KgK_VvI6tKWRv3hnJplc",
  //   created_at: "2025-01-20T09:55:49.577Z",
  //   buyer: {id: "ugHEallR66KgK_VvI6tKWRv3hnJplc", name: "Hellen Wokolo"},
  //   produce: {id: "ugHEallR66KgK_VvI6tKWRv3hnJplc", name: "Rice"}
  // }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Order" />
      
      <div className="">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white px-16 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Order Details
              </h3>
            </div>
            {order && (
              <form action="#">
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col flex-wrap gap-y-6 xl:flex-row">

                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Order ID
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.id}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Status
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.status}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Quantity
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.status}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Amount
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.amount}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Buyer
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.buyer.name}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Produce
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.produce.name}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Order Date
                      </div>
                      <div className="active:__ w-full border-b border-slate-600 bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >{order.created_at}</div>
                    </div>
                    
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <div className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Needs Logistics
                      </div>
                      <div className="active:__ w-full bg-transparent py-3 text-black outline-none transition dark:text-white"
                      >                     
                        <p className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                          order.need_logistics
                            ? "bg-success text-success"
                            : "bg-danger text-danger"
                        }`}>
                          {order.need_logistics ? "Yes" : "No"}
                        </p>
                    
                  
                      </div>
                    </div>

                  </div>

                  {/* <div className="flex justify-end gap-4">
                    <button
                      className="rounded-2xl border border-black-2 px-8 py-3 text-center font-medium text-black-2 hover:bg-opacity-90"
                    >
                      Edit
                    </button>

                    <button className="rounded-2xl bg-primary px-8 py-3 text-center font-medium text-gray hover:bg-opacity-90">
                      Save
                    </button>
                  </div> */}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
