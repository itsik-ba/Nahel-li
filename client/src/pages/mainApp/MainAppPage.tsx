import styles from "./mainApp.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar"
import CreateCustomer from "../../components/SideBar/createCustomer/CreateCustomer";
import Dairy from "../../components/SideBar/dairy/Dairy";
import Accessories from "../../components/SideBar/Accessories/Accessories";
import Inventory from "../../components/SideBar/Inventory/Inventory";




interface MainAppProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}


const MainAppPage: React.FC<MainAppProps> = ({setIsLogin}) => {
  const navigate = useNavigate();
   
  useEffect(() => {
    
    // setIsLogin(true);
    
  }, [setIsLogin]);

 

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);


  const renderComponent = () => {
    if (selectedComponent === 'Accessories') {
      return <Accessories />;
    } else if (selectedComponent === 'Inventory') {
      return <Inventory />;
    } else if (selectedComponent === 'Dairy') {
      return <Dairy />;
    } else if (selectedComponent === 'CreateCustomer') {
      return <CreateCustomer />;
    } else {
      return <div>בוא נתחיל , בחר לך אחת מהאופציות ונתחיל לעבוד</div>;
    }
  };
  

  
  return (
    <>
  <div className={styles.mainHomePage}>
    <SideBar onSelectComponent={setSelectedComponent} />

       <div className={styles.mainContent}>
          {renderComponent()}
        </div>
  </div> 
    
     
     
    
    </>
  )
}

export default MainAppPage