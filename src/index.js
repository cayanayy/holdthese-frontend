import React from "react";
import ReactDOM from "react-dom/client";
import ItemsPage from "./pages/Items";
import Home from "./pages/Home";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./css/Global.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path=":code" element={<ItemsPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
