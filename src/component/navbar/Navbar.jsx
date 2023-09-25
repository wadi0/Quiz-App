import './static/navbar.scss'
import logo from '../../assets/img/wadi.jpg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
          <Link to='/' className='link' >
            <img src={logo} alt="logo" />
            <h1>Zaber Ahmed Wadi</h1>
            </Link>
        </div>
        <div className="navbar-right">
        <span className="material-icons"> account_circle </span>
        <b><Link to='/sign-up' className='link'>Signup</Link>
        <Link to='/sign-in' className='link'>Signin</Link></b>
        </div>
    </div>
  )
}
