import './static/navbar.scss'
import logo from '../../../assets/img/wadi.jpg'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
            <img src={logo} alt="logo" />
            <h1>Zaber Ahmed Wadi</h1>
        </div>
        <div className="navbar-right">
        <span className="material-icons"> account_circle </span>
        <b>Signup</b>
        </div>
    </div>
  )
}
