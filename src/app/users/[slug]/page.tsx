import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";
import { UserData } from "@/types/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetcher } from "@/util/requester";

export const metadata: Metadata = {
  title: "User Details - Useri Dashboard",
  description: "",
};

const FormLayout = async ({params}: {params: {slug: string}}) => {

  // const user: UserData = {
  //   id: "hvRzMlcucNTkdJeFs-fbYLipllZgYX",
  //   name: "Keme Kenneth",
  //   email: "keme.kenneth@gmail.com",
  //   phone: "2349023223433",
  //   verified: true,
  //   created_at: "2024-03-11T07:54:40.445Z",
  //   location: "Choba, Port Harcourt",
  //   gender: "male",
  //   role: "farmer",
  // };


    const token = cookies().get("token")?.value
    
    if(!token) redirect("/login")
    
    const user = (await fetcher(`admin/farmer/${params.slug}`, token)).data

    // console.log({slug: params.slug})

  return (
    <DefaultLayout>
      <Breadcrumb pageName="User" />
      
      <div className="">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white px-16 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                User Details
              </h3>
            </div>
            {user && (
              <form action="#">
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col flex-wrap gap-y-6 xl:flex-row">
                    <div className="w-full md:pr-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User ID
                      </label>
                      <input
                        type="text"
                        value={user.id}
                        disabled
                        placeholder="Enter your first name"
                        className="active:__ w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full md:pl-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        value={user.name}
                        disabled
                        placeholder="Enter your last name"
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5 w-full md:pr-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Phone <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        value={user.phone}
                        disabled
                        placeholder="Enter your phone number"
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-4.5 w-full md:pl-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        placeholder="Enter your email address"
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full md:pr-4 xl:w-1/2">
                      <SelectGroupOne
                        label="Sex"
                        valueText={user.gender}
                        selectValues={["male", "female"]}
                        disabled={true}
                      />
                    </div>

                    <div className="mb-4.5 w-full md:pl-4 xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User Type
                      </label>
                      <input
                        type="text"
                        value={user.role}
                        disabled
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 capitalize text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="mb-6 w-full">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Location
                      </label>
                      <textarea
                        rows={6}
                        disabled
                        className="w-full rounded-2xl border-[1.5px] border-slate-400 bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        {user.location}
                      </textarea>
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
