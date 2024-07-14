import styles from "./mainApp.module.css"
import SideBar from "../../components/SideBar/SideBar"
import { useState } from "react";
import CreateCustomer from "../../components/SideBar/createCustomer/CreateCustomer";
import Dairy from "../../components/SideBar/dairy/Dairy";
import Accessories from "../../components/SideBar/Accessories/Accessories";
import Inventory from "../../components/SideBar/Inventory/Inventory";




const MainAppPage = () => {

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