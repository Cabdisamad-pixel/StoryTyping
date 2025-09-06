import { useContext, useState } from 'react'
import profileImage from '../../../../images/user.png'

import ProfileStyle from './Profile.module.css'
import AuthContex from '../../../../store/Auth/AuthStore'
import EditProfile from './EditProfile/EditProfile'

const Profile = () => {

    const ctx = useContext(AuthContex);

    const [showEditProfile, setShowEditProfile] = useState(false)

    const ShowEditProfileChangeHandler = () => {

        setShowEditProfile((prev) => !prev)
    }
    return (
        <>
            <button className={ProfileStyle.Profilecontainer} onClick={ShowEditProfileChangeHandler}>
                <img src={profileImage} alt="profile-image" width={'25px'} height={'25px'} />
                <span>{ctx.currentUser.name}</span>
            </button>
            {showEditProfile && <EditProfile ShowEditProfileChangeHandler={ShowEditProfileChangeHandler} />}
        </>
    )
}

export default Profile