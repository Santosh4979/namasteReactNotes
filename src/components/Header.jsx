import { logourl } from "../utils/constants";
import { useState } from "react";
import Body from "./Body";

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
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logourl} />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                        <button onClick={onLoginClick}  id="login" className="login">{loginBtnName}</button>
                     </ul>
                </div>
            </div>
            <Body />
        </>
    )
}

export default Header;