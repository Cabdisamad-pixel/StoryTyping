import { createContext } from "react";

const UserContext = createContext({
    Data:[],
    UpdateData : () => {}
})


export default UserContext