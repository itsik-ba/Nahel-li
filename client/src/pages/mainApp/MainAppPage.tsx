import styles from "./mainApp.module.css"
import MainBord from "../../components/mainBord/MainBord"
import SideBar from "../../components/SideBar/SideBar"




const MainAppPage = () => {
  
  return (
    <>
    <div className={styles.mainHomePage}>
    <SideBar />
    <MainBord />
    </div> 
    
     
     
    
    </>
  )
}

export default MainAppPage