import Header from "./components/home/Header/Header"
import NavBar from "./components/home/Header/navBar/NavBar"

import styleApp from './App.module.css'
import { useContext } from "react"
import AuthContex from "./store/Auth/AuthStore"
import Login from "./components/Login/Login"
import useInput from "./Hooks/useInput"
import Home from "./components/home/Home"



const App = () => {



    const ctx = useContext(AuthContex)

    return (
        <>
                {!ctx.auth && <Login />}
                {ctx.auth && <Home/>}
            
        </>
    )
}
export default App