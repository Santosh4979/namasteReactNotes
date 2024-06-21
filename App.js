import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./src/components/Header";
import { RouterProvider, createBrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
const Grocery = React.lazy(() => import("./src/components/Grocery"));
const AppLayout = () => {
    return <>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route
          path="/"
          element={<Body />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route path="/restaurant/:resId" element={<RestaurantMenu/>} />
        <Route path="/about" element={<About />} />
        </Route>
    </Routes>
    </> 
}

const appRouter = createBrowserRouter([
    {
        path: "/", element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />, 
            }, {
                path: "/about",
                element: <About />,
            }, {
                path: "/contact",
                element: <Contact />,
                
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            { path: "/restaurant/:resId", 
              element: <RestaurantMenu /> }
        ],
        errorElement: <Error />    
    }

])
const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(<RouterProvider router={appRouter} />);
