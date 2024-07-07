import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Pricing from "../pages/Pricing"



const AppRoutes = () => {
  return (
    
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pricing" element={<Pricing/>} />
    </Routes>
    
  )
}

export default AppRoutes