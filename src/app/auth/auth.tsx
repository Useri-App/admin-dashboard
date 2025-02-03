import { redirect } from "next/navigation"
import { useEffect } from "react"
import Cookies from 'js-cookie';


  


const isAuthenticated = (Component: React.ComponentType) => {

    return function IsAuthenticated(props: any){
        const isAuthenticated = true //Cookies.get('token');

        useEffect(() => {

            if(!isAuthenticated) redirect("/login");

        }, [isAuthenticated])

        if(!isAuthenticated) return null;

        return <Component {...props} />
    }
}

export default isAuthenticated;