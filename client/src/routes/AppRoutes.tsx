import { Routes, Route } from "react-router-dom"
import Pricing from "../pages/pricing/Pricing"
import HomePage from "../pages/homePage/HomePage"
import MainAppPage from "../pages/mainApp/MainAppPage"
import Login from "../components/logOn/Login"


interface AppRoutesProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ setIsLogin })=> {
   




  return (
    <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/pricing" element={<Pricing/>} />
         <Route path="/login" element={<Login setIsLogin={setIsLogin}/>} />

         <Route path="/mainApp" element={<MainAppPage setIsLogin={setIsLogin}/>} />
      
        
        
    </Routes>
    
  );
}

export default AppRoutes