import { current } from "@reduxjs/toolkit"
import { createContext } from "react"


const AuthContex = createContext({
    auth:false,
    users : [],
    currentUser : []
})


export default AuthContex