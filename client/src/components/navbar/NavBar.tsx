import { NavLink } from "react-router-dom"
import "../../index.css"

const NavBar = () => {
  return (
    <main className="mainbar">
      <div className="nahelbar">נהל-לי</div>
    <div className="navbar">
    <NavLink to="/pricing">מנוי</NavLink> 
     <NavLink to="/">בית</NavLink> 
     <NavLink to="/register">התחבר</NavLink> 
    </div>  
    </main>
  )
}

export default NavBar