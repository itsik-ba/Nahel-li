import styles from "./mainApp.module.css"
import {  useState } from "react";

import SideBar from "../../components/SideBar/SideBar"
import CreateCustomer from "../../components/SideBar/createCustomer/CreateCustomer";
import Dairy from "../../components/SideBar/dairy/Dairy";
import Accessories from "../../components/SideBar/Accessories/Accessories";
import Inventory from "../../components/SideBar/Inventory/Inventory";
import CustomerCard from "../../components/SideBar/customerCard/CustomerCard";





const MainAppPage: React.FC = () => {
 
 
 

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
      return <div>
              <CustomerCard />
            </div>;
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