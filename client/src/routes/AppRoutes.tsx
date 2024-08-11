import { Routes, Route } from "react-router-dom"
import Pricing from "../pages/pricing/Pricing"
import HomePage from "../pages/homePage/HomePage"
import MainAppPage from "../pages/mainApp/MainAppPage"
import NewPassword from "../components/logOn/NewPassword"
import ForgotPassword from "../components/logOn/ForgotPassword"




const AppRoutes: React.FC = ()=> {
   

return (
    <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/pricing" element={<Pricing/>} />
       

         <Route path="/mainApp" element={<MainAppPage/>} />
         <Route path="/newPassword" element={<NewPassword/>} />
         <Route path="/forgotPassword" element={<ForgotPassword/>} />
      
        
        
    </Routes>
    
  );
}

export default AppRoutes