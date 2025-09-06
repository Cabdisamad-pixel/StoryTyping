import { createContext, useState } from "react";
import AuthContex from "./AuthStore";




const AuthProvider = ({children}) => {

    const  usersInfo = [
        {
            id:1,
            email : 'cabdisamadmaxamed528@gmail.com',
            name:'cabdisamad',
            password:'cabdisamad12345'
        }
    ]

    const [auth, setAuth] = useState(false)
    const [users, setUsers] = useState(usersInfo);
    const [currentUser, setCurrentUser] = useState({});
 
    

    const AuthChangeHandler = () => {
        setAuth(!auth)
    }

    const hebel =  {
        auth,
        AuthChangeHandler,
        users,
        setUsers,
        currentUser,
        setCurrentUser
    }
    return(
        <AuthContex.Provider value={hebel}>
            {children}
        </AuthContex.Provider>
    )
}
export default AuthProvider