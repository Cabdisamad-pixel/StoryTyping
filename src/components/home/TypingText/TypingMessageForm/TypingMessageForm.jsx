
import { useContext } from 'react';
import useInput from '../../../../Hooks/useInput';
import TyppingStyle from './TypingMessageForm.module.css'
import UserContext from '../../../../store/UserData/UserContext';
import AuthContex from '../../../../store/Auth/AuthStore';


const TypingMessageForm = () => {

    const { name : text, inputHandler : textChangeHandler, isValid : textIsValid, ResetInput : resetText  } = useInput((input)=> input.trim().length > 10)

    const userDataCtx = useContext(UserContext);
    const AuthCtx = useContext(AuthContex)

    const OnSubmit = (e) => {
        e.preventDefault();

        const userIdx = userDataCtx.Data.findIndex((user) => {
            return user.id === AuthCtx.currentUser.id
        })

        // userDataCtx.UpdateData[userDataCtx.Data[AuthCtx.currentUser.id]]
        // userDataCtx.Data[userIdx].typingData.push(text)

        userDataCtx.UpdateData( prev =>[ ...prev , prev[userIdx].typingData.push(text)])

        resetText();
    }
    return (
        <>
            <div className={TyppingStyle.FormControll}>
                <form onSubmit={OnSubmit}>
                    <textarea value={text} onChange={textChangeHandler}/>
                    <button type="submit" disabled={!textIsValid}>Post</button>
                </form>
            </div>
        </>
    )
}
export default TypingMessageForm