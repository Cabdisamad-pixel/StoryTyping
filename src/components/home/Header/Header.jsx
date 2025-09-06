import HeaderStyle from './Header.module.css'
import NavBar from './navBar/NavBar'
import Profile from './Profile/Profile'

const Header = () => {
 
    return(
    
        <div className={HeaderStyle.container}>
                    <h1> Typing...</h1>
                    <NavBar />
                    <Profile/>
        </div>

    )
}

export default Header