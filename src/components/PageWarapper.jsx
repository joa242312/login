import { useEffect } from "react"

export default function PageWarapper({children}){
    //use effect parar o token do localStorge
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            window.location.href='/'
        }
    },[])
    return(
        <div className="w-full h-screen bg-white text-black">{children}</div>
    )
}