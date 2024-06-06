import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./src/components/Header";



const AppLayout = () => {
    return <>
        <Header />
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1> Namaste React Title JSX Changed Now </h1>



root.render(<AppLayout />);
