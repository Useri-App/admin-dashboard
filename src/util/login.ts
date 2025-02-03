import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login(credentials: any) {
  const ress = await fetch("https://api.useriapp.com:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...credentials }),
  });
  return (await ress.json()).data.accessToken;
}

export async function adminLogin(credentials: any) {
}
