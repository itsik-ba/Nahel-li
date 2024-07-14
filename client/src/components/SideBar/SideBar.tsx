import styles from "./sideBar.module.css";


const SideBar = () => {
  return (
    <div className={styles.mainSideBar}>
      <button className={styles.sideBarLists}>עזרים</button>
      <button className={styles.sideBarLists}>ניהול מלאי</button>
      <button className={styles.sideBarLists}>יצירת לקוח</button>
      <button className={styles.sideBarLists}>ניהול יומן</button>
    </div>
  )
}

export default SideBar