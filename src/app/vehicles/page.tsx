import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
import { serverAction } from "./create-vehicles";
import { VehicleType } from "@/types/vehicle";
import VehicleTable from "@/components/Tables/VehicleTable";
import { CreateButton } from "../ui/buttons/page";
import Login from "@/util/login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetcher } from "@/util/requester";

export const metadata: Metadata = {
  title: "Vehicles - Useri Dashboard",
  description: "",
};

async function Vehicle() {
  const token = cookies().get("token")?.value
    
    if(!token) redirect("/login")
    
    const {meta, vehicles} = (await fetcher("vehicle", token)).data

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vehicles" />
      <VehicleTable vehicles={vehicles} />

      {/* <CreateButton action={serverAction} name={"Create Vehicles"} /> */}
    </DefaultLayout>
  );
}

export default Vehicle;
