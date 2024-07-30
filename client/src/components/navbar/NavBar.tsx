import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";






const NavBar: React.FC = () => {
 
 

  return (
    <main className={styles.mainBar}>
      <div className={styles.nahelbar}></div>
      <div className={styles.navbar}>
     
          <>
            <NavLink to="/pricing" className={styles.navbarlist}>מנוי</NavLink>
            <NavLink to="/" className={styles.navbarlist}>בית</NavLink>
            <div className={styles.navbarlist}>SALON-LI</div>
          </>
       
      
      </div>
    </main>
  );
}

export default NavBar;
