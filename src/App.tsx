import React from 'react';
import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Detail from "./pages/Detail";
import {ServicesLoader} from "./utils";
import Main from "./pages/Main";
import Layout from "./components/Layout/Layout";
import Error from "./pages/Error";
import ResourceError from "./pages/ResourceError";
import Resource from "./pages/Resource";

function App() {
    const router = createBrowserRouter(
        [
            {
                element: (<Layout/>),
                children: [
                    {
                        path: "/",
                        element: (<Main/>),
                    },
                    {
                        path: ":serviceId",
                        element: (<Detail/>),
                        loader: ServicesLoader,
                        errorElement: <Error/>,
                        children: [
                            {
                                path: ':resourceKey',
                                element: (<Resource/>),
                                errorElement: <ResourceError/>
                            }
                        ]
                    },
                    {
                        path: '*',
                        element: (<Navigate to={'/'}></Navigate>)
                    }]
            }

        ]
    );
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
