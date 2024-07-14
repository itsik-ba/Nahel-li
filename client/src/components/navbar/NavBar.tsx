import { NavLink, useNavigate } from "react-router-dom";
import  styles  from "./navbar.module.css";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

const NavBar = () => {
  
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () =>{
   setIsLogin(false);
   navigate('./homePage')
  }


  return (
    <main className={styles.mainBar}>
      <div className={styles.nahelbar}></div>
    <div className={styles.navbar}>
     {!isLogin ? <NavLink to="/pricing" className={styles.navbarlist}>מנוי</NavLink> : <button>החשבון שלי</button> }
    {!isLogin ? <NavLink to="/" className={styles.navbarlist}>בית</NavLink> : <SearchBar/> }
     {!isLogin ?<NavLink to="/login" className={styles.navbarlist}>התחבר</NavLink> : <button onClick={handleLogOut}>התנתק</button> }
    </div>  
    </main>
  )
}

export default NavBar