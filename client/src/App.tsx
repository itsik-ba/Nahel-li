
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/navbar/NavBar"
import "./index.css"
import AppRoutes from "./routes/AppRoutes"


const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.onpopstate = () => {
      if (!isLogin) {
        navigate("/login"); 
        setIsLogin(false)
      }
    };
  }, [isLogin, navigate]);


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
