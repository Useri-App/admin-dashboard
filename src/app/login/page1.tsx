import { redirect } from "next/navigation";
import { FormEvent } from "react";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";

export default function LoginPage() {
  // const router = useRouter();

  const serverAction = async (form: FormData) => {
    "use server";

    const username = form.get("username");
    console.log(username);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    // const url = "https://reqres.in/api/todos";
    // const url = "http://api.useriapp.com:5000/admin/auth/login"
    const url = "/api/auth/login";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InBheWxvYWQiOiJaOU8teDdQM3MxUi03SFQ3eU5CUTVXZGIzNXFTd0YifSwiaWF0IjoxNzI5MDQ5ODIwLCJleHAiOjE3MjkwNTM0MjB9.Gi_9ICF-bDU5EFZIhp14FF3bWAZkrnkm4kOfzrC_bJ4"
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const token = await response.json();
      console.log(token);

      // cookies().set("auth", JSON.stringify(token), {
      //   expires: new Date(Date.now() + 10 * 1000),
      //   httpOnly: true,
      // });

      // router.push("/profile");
      redirect("/profile");
    } else {
      // Handle errors
    }
  }

  return (
    // <form onSubmit={handleSubmit}>
    <form action={serverAction}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
