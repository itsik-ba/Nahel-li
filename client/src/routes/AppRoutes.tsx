import { Routes, Route } from "react-router-dom"

import Pricing from "../pages/pricing/Pricing"
import HomePage from "../pages/homePage/HomePage"
import MainAppPage from "../pages/mainApp/MainAppPage"



const AppRoutes = () => {
  return (
    
    <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/pricing" element={<Pricing/>} />
         <Route path="/login" element={<Pricing/>} />

         <Route path="/mainApp" element={<MainAppPage/>} />
      
        
        
    </Routes>
    
  )
}

export default AppRoutes