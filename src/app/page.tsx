import Dashboard from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { redirect, useRouter } from "next/navigation";
import { cookies } from "next/headers";
import {fetcher} from "@/util/requester";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function Home() {
  const token = cookies().get("token")?.value
  
  if(!token) redirect("/login")
  
  const data = await fetcher("farm", token)
  

  const farmers = (await fetcher("admin/farmer?per_page=3", token)).data
  const buyers = (await fetcher("admin/buyer?per_page=3", token)).data
  const transporters = (await fetcher("admin/transporter?per_page=3", token)).data
  const {meta, orders} = (await fetcher("order", token)).data
  const totalFarms = (await fetcher("farm", token)).data?.meta?.total_items

  const farmersWithRole = farmers.user.map((farmer:  any, i: number) => {
    return Object.assign({}, farmer, {role: "farmer"})
  })
  const buyersWithRole = buyers.user.map((buyer:  any, i: number) => {
    return Object.assign({}, buyer, {role: "buyer"})
  })

  const totalUsers = farmers.meta.total_items + buyers.meta.total_items + transporters.meta.total_items

  const transportersWithRole = transporters.user.map((transporter:  any, i: number) => {
    return Object.assign({}, transporter, {role: "transporter"})
  })

  return (
    <>
      <DefaultLayout>
        <Dashboard users={[...farmersWithRole, ...buyersWithRole, ...transportersWithRole]} orders={orders} totalUsers={totalUsers} totalFarms={totalFarms}/>
      </DefaultLayout>
    </>
  );
}
