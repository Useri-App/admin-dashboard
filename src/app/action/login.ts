import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const submitAction = async (formData: FormData) => {
  "use server"
  const username = formData.get("username")
  const password = formData.get("password")
  const url = "https://reqres.in/api/todos"  
  
  const ress = await fetch("https://api.useriapp.com:5000/api/admin/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const token = (await ress.json()).data.accessToken;
  const cookie = {
      name: "session",
      duration: 5 * 60 * 1000,
      options: {httpOnly: true, secure: true, path: "/"}
    } //, sameSite: "lax"
    const expires  = new Date(Date.now() + cookie.duration)

    cookies().set("token", token, {...cookie.options, expires})
    const cookieToken = cookies().get("token")?.value
    // console.log(cookieToken)

    redirect("/")
  
}