

import NavBar from "./components/navbar/NavBar"
import "./index.css"
import AppRoutes from "./routes/AppRoutes"


const App: React.FC = () => {
 

  return (
    <>
      <div className="mainApp">
        <NavBar />
        <AppRoutes/>
      </div>
     
     
    </>
  )
}

export default App
