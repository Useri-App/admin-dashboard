import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {fetcher} from "@/util/requester";
import BidsTable from "@/components/Tables/BidsTable";

export const metadata: Metadata = {
  title: "Bids - Useri Dashboard",
  description: "",
};

async function Bids() {

  const token = cookies().get("token")?.value
  
  if(!token) redirect("/login")
  
  const {meta, bids} = (await fetcher("bid", token)).data
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Bids" />
        <BidsTable bids={bids} />
      </DefaultLayout>
    </>
  );
}

export default Bids;
