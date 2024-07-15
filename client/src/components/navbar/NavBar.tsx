import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLogin(false);
    navigate('./');
  }

  return (
    <main className={styles.mainBar}>
      <div className={styles.nahelbar}></div>
      <div className={styles.navbar}>
        {!isLogin ? (
          <>
            <NavLink to="/pricing" className={styles.navbarlist}>מנוי</NavLink>
            <NavLink to="/" className={styles.navbarlist}>בית</NavLink>
            <NavLink to="/login" className={styles.navbarlist}>התחבר</NavLink>
          </>
        ) : (
          <>
            <div>החשבון שלי</div>
            <SearchBar />
            <div onClick={handleLogOut}>התנתק</div>
          </>
        )}
      </div>
    </main>
  );
}

export default NavBar;
