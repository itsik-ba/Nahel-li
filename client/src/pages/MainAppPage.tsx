import SearchBar from "../components/searchBar/SearchBar"
import SideBar from "../components/SideBar/SideBar"



const MainAppPage = () => {
  return (
    <div className="mainHomePage">
    <div className="searchbar">
      <SearchBar />
    </div>
    <div>
      <SideBar />
    </div>
     
    </div>
  )
}

export default MainAppPage