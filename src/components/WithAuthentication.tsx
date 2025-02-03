import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

async function WithAuthentication<P extends object>(Component: React.ComponentType<P> | React.FC<P>) {
  
  const token = cookies().get("token")?.value
  console.log({token, rand: Math.random()})
  if(!token) {
    redirect("/login")
  } else {
    return (props: P) => {
      return <Component {...props} /> as JSX.Element
    };
  }
}

export default WithAuthentication;