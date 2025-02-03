type MethodType = "POST" | "PATCH" | "DELETE"

export async function fetcher (path: string, token: string) {

  const res = await fetch(`https://api.useriapp.com:5000/api/${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, 
    }
  });

  const data =  (await res.json()) //.data[0]?.name;
  // console.log({token, data})
  return data

}

export async function updater (path: string, method: MethodType, token: string, payload: any) {

  const res = await fetch(`https://api.useriapp.com:5000/api/${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, 
    },
    body: JSON.stringify({ ...payload })
  });

  const data =  (await res.json()) //.data[0]?.name;
  // console.log({token, data})
  return data

}