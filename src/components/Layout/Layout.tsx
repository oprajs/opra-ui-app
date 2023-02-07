import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <main
                className="w-full h-[calc(100vh_-_100px)]"
            >
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
