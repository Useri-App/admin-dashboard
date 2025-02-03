import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
import { ProduceType } from "@/types/produce";
import ProduceTable from "@/components/Tables/ProduceTable";
import { CreateButton } from "../ui/buttons/page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetcher } from "@/util/requester";

export const metadata: Metadata = {
  title: "Farm Produce - Useri Dashboard",
  description: "",
};

async function Produce() {
  const token = cookies().get("token")?.value
  
  if(!token) redirect("/login")
  
  const {meta, produce} = (await fetcher("produce", token)).data

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Produce" />
      <ProduceTable produce={produce} />

      {/* <CreateButton action={serverAction} name={"Create produce"} /> */}
    </DefaultLayout>
  );
}

export default Produce;
