import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";
import { ProduceType } from "@/types/produce";
import ProduceTable from "@/components/Tables/ProduceTable";
import Login from "@/util/login";
import { TransactionType } from "@/types/transaction";
import TransactionTable from "@/components/Tables/TransactionTable";

const transactions: TransactionType[] = [
  {
    farmer_id: "Faith Uweni",
    order: {
      quantity: 2,
      quantity_metric: "ton",
      produce: {
        name: "Yam",
        photos: ["https://res.cloudinary.com/dq2z..."],
      },
    },
    id: "0rI3w4HNYee_kcW2b...",
    amount: 154000,
    reference: "T43282473294...",
    created_at: "2023-02-07T04:51:10.738Z",
    buyer_id: "Green Harvest Farms",
  },
];

export const metadata: Metadata = {
  title: "Transactions - Useri Dashboard",
  description: "",
};

function Transaction() {

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Produce" />
      <TransactionTable transactions={transactions} />
    </DefaultLayout>
  );
}

export default Transaction;
