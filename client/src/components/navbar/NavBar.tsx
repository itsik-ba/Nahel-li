import { NavLink } from "react-router-dom"
import "../../index.css"

const NavBar = () => {
  return (
    <main className="mainbar">
      <div className="nahelbar">נהל-לי</div>
    <div className="navbar">
    <NavLink to="/pricing" className="navbarlist">מנוי</NavLink> 
     <NavLink to="/" className="navbarlist">בית</NavLink> 
     <NavLink to="/login" className="navbarlist">התחבר</NavLink> 
    </div>  
    </main>
  )
}

export default NavBar