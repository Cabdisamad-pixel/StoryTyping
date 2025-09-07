import { useContext, useState } from "react"
import UserContext from "./UserContext"
import AuthContex from "../Auth/AuthStore"



const UserProvider = ({ children }) => {


    const ctxAuth = useContext(AuthContex);


    const [usersData, setUsersData] = useState([{
        id: 1,
        typingData: ['cabdisamad waa arday dhigta jaamacada jamhuriya university']
    }])

    const UserValue = {

        Data: usersData,
        UpdateData: setUsersData,

    }

    return (
        <UserContext.Provider value={UserValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider