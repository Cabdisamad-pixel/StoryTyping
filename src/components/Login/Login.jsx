import { useContext, useState } from 'react'
import useInput from '../../Hooks/useInput'
import LoginStyle from './Login.module.css'
import AuthContex from '../../store/Auth/AuthStore'
import UserContext from '../../store/UserData/UserContext'


const Login = () => {

    const [oldUser, setOldUser] = useState(true);

    const ctx = useContext(AuthContex);
    const UsersCtx = useContext(UserContext);

    const { name: email, isValid: emailValid, inputHandler: emailHandler, BlurHandler: emailBlur, ResetInput: emailReset, invalid: emailInvalid } = useInput((input) => input.includes('@'))

    const { name: password, isValid: passwordValid, inputHandler: passwordHandler, BlurHandler: passwordBlur, ResetInput: passwordReset, invalid: passwordInvalid } = useInput((input) => input.trim().length > 4)

    const { name: fullName, isValid: fullNameValid, inputHandler: fullNameHandler, BlurHandler: fullNameBlur, ResetInput: fullNameReset, invalid: fullNameInvalid } = useInput((input) => input.trim().length > 6)

    const Submitvalid = !oldUser ? emailValid && passwordValid && fullNameValid : emailValid && passwordValid


    const SwappingSingUpAndLogin = () => {
        fullNameReset();
        emailReset();
        passwordReset();
        setOldUser(!oldUser)
    }

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false)


    const SubmitHandler = (e) => {
        e.preventDefault()

        if (oldUser) {



            // const emailUsersName = ctx.users.map((user) => {
            //     return user.email
            // })

            // const passwordUsersName = ctx.users.map((user) => {
            //     return user.password
            // })

            // console.log(emailUsersName);
            // console.log(passwordUsersName);

            const emailFound = ctx.users.find((oldUser) => {
                
                 if (oldUser.email === email) {
                    // console.log(oldUser);
                    ctx.setCurrentUser(oldUser)
                    
                 }
                 return oldUser.email === email
            })

            const passwordFound = ctx.users.find((oldUser) => {
                return oldUser.password === password
            })

            if (!emailFound) {
                setErrorEmail(true)
                return
            }
            if (!passwordFound) {
                setErrorPassword(true)
                return
            }
            emailReset();
            passwordReset();
            ctx.AuthChangeHandler()
        }
        else {
            const emailFound = ctx.users.find((oldUser) => {
                return oldUser.email === email
            })
            if (emailFound) {
                setErrorEmail(true)
                return
                
            }
            else {
                const newUser = {
                    id: ctx.users.length + 1,
                    email: email,
                    name: fullName,
                    password: password
                }
                ctx.setCurrentUser(newUser)
                ctx.setUsers([...ctx.users, newUser])
                emailReset();
                passwordReset();
                fullNameReset();
                const NewUserData = {
                    id : ctx.users.length + 1,
                    typingData : []
                }
                UsersCtx.UpdateData([...UsersCtx.Data,NewUserData])
                ctx.AuthChangeHandler();
                console.log(newUser);
            }

        }
    }

    console.log(ctx.users);




    return (
        <>
            <div className={LoginStyle.FormControl}>
                <form onSubmit={SubmitHandler} >
                    {errorEmail && <p>Somthing auth wrong</p>}
                    {errorPassword && <p>Somthing auth wrong</p>}
                    {!oldUser && <div className={`${!fullNameInvalid && LoginStyle.ContainerInput} ${fullNameInvalid && LoginStyle.invalid}`}>
                        <label>Full Name</label>
                        <input type="text" onChange={fullNameHandler} value={fullName} onBlur={fullNameBlur} placeholder='Enter the Full-Name' />
                    </div>}
                    <div className={`${!emailInvalid && LoginStyle.ContainerInput} ${emailInvalid && LoginStyle.invalid}`}>
                        <label>Email</label>
                        <input type="email" onChange={emailHandler} onBlur={emailBlur} value={email} placeholder='Enter the email' />
                    </div>
                    <div className={`${!passwordInvalid && LoginStyle.ContainerInput} ${passwordInvalid && LoginStyle.invalid}`}>
                        <label>Password</label>
                        <input type="password" onChange={passwordHandler} value={password} onBlur={passwordBlur} placeholder='Enter password' />
                    </div>
                    <button disabled={!Submitvalid} >submit</button>
                    {oldUser ? <p onClick={SwappingSingUpAndLogin}> I dont have acoount please create me an account </p> : <p onClick={SwappingSingUpAndLogin}> I have an account please login</p>}
                </form>
            </div>
        </>
    )
}

export default Login