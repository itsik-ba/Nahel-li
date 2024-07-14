import styles from "./search.module.css"

const SearchBar = () => {
  return (
    <div className={styles.mainSearch}>
   <input 
   type="text" 
   placeholder="חיפוש לקוח" 
   className={styles.searchInput}
   
   />
    </div>
  )
}

export default SearchBar