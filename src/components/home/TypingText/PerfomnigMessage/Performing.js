

import { use, useContext } from 'react';
import PerformingStyle from './Performing.module.css';
import UserContext from '../../../../store/UserData/UserContext';
import AuthContex from '../../../../store/Auth/AuthStore';


const Performing = () => {

    const AuthCtx = useContext(AuthContex);
    const usersDataCtx = useContext(UserContext);

    const userObj = usersDataCtx.Data.find((user) => {
        return user.id === AuthCtx.currentUser.id
    })

    // console.log(userData);


    return (
        <>
            <div className={PerformingStyle.PerformingContainer}>
                { userObj.typingData.length > 0 ? userObj.typingData.map((text) => {
                    return (
                        <div className={PerformingStyle.TextContainer}>
                            {text}
                        </div>
                    )
                }) : <p>No text Founded in this Current Profile</p>}
            </div>
        </>
    )
}

export default Performing