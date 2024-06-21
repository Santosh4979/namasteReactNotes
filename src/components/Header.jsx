import { logourl } from "../utils/constants";
import { useState } from "react";
import Body from "./Body";
import { Link, Outlet } from "react-router-dom";

 const Header = () => {
   const [loginBtnName, setLoginBtnName] = useState("Login");
   const onLoginClick = () => {
     if(loginBtnName === "Login") {
        setLoginBtnName("Logout");
     } else {
        setLoginBtnName("Login");
     }
   }
   return (
        <>
            <div className="flex justify-between bg-pink-50 shadow-lg">
                <div className="logo-container">
                    <img className="w-56" src={logourl} />
                </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className="px-4" id="home" to="/"><Link to="/">Home</Link></li>
                        <li className="px-4" id="about"><Link to="/about">About</Link></li>
                        <li className="px-4" id="contact"><Link to="/contact">Contact</Link></li>
                        <li className="px-4" id="grocery"><Link to="/grocery">Grocery</Link></li>
                        
                        <li>Cart</li>
                        <button onClick={onLoginClick}  id="login" className="login">{loginBtnName}</button>
                     </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header;