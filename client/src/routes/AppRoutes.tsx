import { Routes, Route } from "react-router-dom"

import Pricing from "../pages/Pricing"
import HomePage from "../pages/HomePage"
import MainAppPage from "../pages/MainAppPage"



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