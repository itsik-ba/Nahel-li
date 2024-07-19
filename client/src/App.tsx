
import { useState } from "react";
import NavBar from "./components/navbar/NavBar"
import "./index.css"
import AppRoutes from "./routes/AppRoutes"


const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);


  return (
    <>
      <div className="mainApp">
        <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
        <AppRoutes setIsLogin={setIsLogin} />
      </div>
     
     
    </>
  )
}

export default App
