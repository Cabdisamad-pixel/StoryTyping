import { useContext } from 'react'
import NavBarStyle from './NavBar.module.css'
import AuthContex from '../../../../store/Auth/AuthStore';

const NavBar = () => {
const ctx = useContext(AuthContex);
// console.log(ctx.cabdi,ctx.aut, ctx.auth);



    return (
        <>
            <ul >
                <li>Home</li>
                <li>about</li>
                <li>main</li>
                <li>center</li>
                <button onClick={() => ctx.AuthChangeHandler()}>LogOut</button>
            </ul>
        </>
    )
}
export default NavBar