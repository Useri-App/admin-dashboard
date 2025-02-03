import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UserTable from "@/components/Tables/TableTwo";
import { Metadata } from "next";
import React from "react";
import { UserData } from "@/types/user";
import { cookies } from "next/headers";
import WithAuthentication from "@/components/WithAuthentication";
import { redirect } from "next/navigation";
import { fetcher } from "@/util/requester";

export const metadata: Metadata = {
  title: "Users: Farmers, Buyers, Transporters - Useri Dashboard",
  description: "",
};

async function Users() {
    const token = cookies().get("token")?.value
    
    if(!token) redirect("/login")
    
      // {meta, user}
    const farmers = (await fetcher("admin/farmer", token)).data?.user
    const buyers = (await fetcher("admin/buyer", token)).data?.user
    const transporter = (await fetcher("admin/transporter", token)).data?.user

    const farmersWithRole = farmers.map((farmer:  any, i: number) => {
      return Object.assign({}, farmer, {role: "farmer"})
    })
    const buyersWithRole = buyers.map((buyer:  any, i: number) => {
      return Object.assign({}, buyer, {role: "buyer"})
    })

    const transportersWithRole = transporter.map((transporter:  any, i: number) => {
      return Object.assign({}, transporter, {role: "transporter"})
    })

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />
      <UserTable data={[...farmersWithRole, ...buyersWithRole, ...transportersWithRole]} />
    </DefaultLayout>
  );
}

export default Users;