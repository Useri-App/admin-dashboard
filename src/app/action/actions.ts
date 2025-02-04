"use server";

import { revalidatePath } from "next/cache";

export const serverAction = async (formData: FormData) => {   
  // "use server" // having this inline won't let it work in a client component
    const name = formData.get("name");
    const year = formData.get("year");
    const color = formData.get("color");
    const data = { name, year, color }

    try {
      
      const res = await fetch("https://reqres.in/api/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      });
      revalidatePath("/action")
      return await res.json();

    } catch (error: any) {
      return {error: error.message}
    }
  };