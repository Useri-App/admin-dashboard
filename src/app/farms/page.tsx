import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableTwo from "@/components/Tables/TableTwo";
import { Metadata } from "next";
import React from "react";
import { FarmType } from "@/types/farms";
import FarmTable from "@/components/Tables/FarmTable";
import { farmTypeColors } from "@/types/eums";
import { serverAction } from "./create-farms";
import { CreateButton } from "../ui/buttons/page";
import Login from "@/util/login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetcher } from "@/util/requester";

export const metadata: Metadata = {
  title: "Farms - Useri Dashboard",
  description: "",
};

async function Farms() {
    const token = cookies().get("token")?.value
    
    if(!token) redirect("/login")
    
    const {meta, farms} = (await fetcher("farm", token)).data

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Farms" />
      <FarmTable farms={farms} />

      {/* <CreateButton action={serverAction} name={"Create farms"} /> */}
    </DefaultLayout>
  );
}

export default Farms;
