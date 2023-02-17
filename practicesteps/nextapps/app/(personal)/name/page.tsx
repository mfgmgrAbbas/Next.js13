"use client"

// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"



export default function Name(){
    const router = useRouter()
    return (
        <div>
            <h1>My Name is Abbas Shah</h1>
            <br />
            <button type="button" onClick={()=>router.push("/name/address")}>
                Get Address
            </button>
            
        </div>
    )
}