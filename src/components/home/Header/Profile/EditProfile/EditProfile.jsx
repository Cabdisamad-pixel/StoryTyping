import { createPortal } from "react-dom"
import useInput from '../../../../../Hooks/useInput'
import EditProfileStyle from './EditProfile.module.css'
import { useContext, useState } from "react"
import AuthContex from '../../../../../store/Auth/AuthStore'

const EditOverLay = ({ ShowEditProfileChangeHandler }) => {

    const ctx = useContext(AuthContex);

    const { name: EditName, inputHandler: EditChangeHandler, BlurHandler: EditBluHandler, isValid: EditISValid, invalid: EditIsInvalid, ResetInput: ResetEdit } = useInput((input) => input.trim().length > 6 && input.trim().length <= 12)
    const [IsCurrentName, setIsCurrentName] = useState(false)

    console.log(EditISValid);

    const submiValid = EditISValid

    const Onsubmit = () => {

        if (EditName === ctx.currentUser.name) {
            setIsCurrentName(true)
            return
        }

        const EditInfoIdx = ctx.users.findIndex((user) => {
            return user.id === ctx.currentUser.id
        })

        const EditedUserName = ctx.users[EditInfoIdx].name = EditName

        ShowEditProfileChangeHandler()

    }
    return (
        <>
            <div className={EditProfileStyle.EditContainer}>
                <label>Edit Profile</label>
                <input type="text" value={EditName} onChange={EditChangeHandler} onBlur={EditBluHandler} />
                {IsCurrentName && <p> the current Name and the new name is a same  </p>}
                <button disabled={!submiValid} onClick={Onsubmit}>Edit</button>
            </div>
        </>
    )
}

const EditBackDrop = ({ ShowEditProfileChangeHandler }) => {
    return (
        <div className={EditProfileStyle.BackDrop} onClick={ShowEditProfileChangeHandler} >

        </div>
    )

}


const EditProfile = ({ ShowEditProfileChangeHandler }) => {

    console.log('helloe world');



    return (

        <>
            <div >

                {createPortal(<EditBackDrop ShowEditProfileChangeHandler={ShowEditProfileChangeHandler} />, document.getElementById('editBackDrop'))}
                {createPortal(<EditOverLay ShowEditProfileChangeHandler={ShowEditProfileChangeHandler} />, document.getElementById('editOverLay'))}
            </div>
        </>
    )
}
export default EditProfile