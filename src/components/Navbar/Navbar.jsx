import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div className='navbar'>
        <div className="navbar-left" onClick={handleClick}>
            <img className='logo' src={assets.logo} alt="Fintech-logo" />
            <p>FinTech</p>
        </div>
        <div className="navbar-right">
            <img className='bell' src={assets.bell} alt="Notification Bell"/>
            <div className="dot"></div>
            <img className='profile' src={assets.uprofile} alt="User Profile"/>
        </div>
    </div>
  )
}

export default Navbar
