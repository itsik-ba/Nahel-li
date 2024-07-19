
import styles from "./sideBar.module.css";


interface SideBarProps {
  onSelectComponent: (component: string) => void;
}


const SideBar: React.FC<SideBarProps> = ({onSelectComponent}) => {
  
  return (
    <div className={styles.mainSideBar}>
      <div className={styles.bgSideBar}>
      <button 
      className={styles.sideBarLists}
      onClick={() => onSelectComponent('Accessories')}
      >עזרים</button>

      <button 
      className={styles.sideBarLists}
      onClick={() => onSelectComponent('Inventory')}
      >ניהול מלאי</button>

      <button 
      className={styles.sideBarLists}
      onClick={() => onSelectComponent('Dairy')}
      >ניהול יומן</button>

      <button 
      className={styles.sideBarLists}
      onClick={() => onSelectComponent('CreateCustomer')}
      >יצירת לקוח/ה</button>
     </div>
  </div>
  )
}

export default SideBar